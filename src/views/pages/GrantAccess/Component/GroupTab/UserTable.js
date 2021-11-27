import { CCol, CInput, CInputGroup } from "@coreui/react";
import { Field, Formik } from "formik";
import { debounce } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { apiGetUersByName } from "src/apiFunctions/permission";
import InputField from "src/views/components/InputField";
const UserTable = (props) => {
    const { itemSelected, setItemSelected } = props
    const [data, setData] = useState([]);
    const [key, setKey] = useState("");
    const searchByName = (key) => {
        if (!key) {
            setData([]);
            return;
        }
        apiGetUersByName(key).then((e) => {
            if (e.data.code === '200') {
                setData(e?.data?.lstObj);
            }
        })
    }
    useEffect(() => {
        searchByName();
    }, []);

    const debounceSearch = useCallback(debounce((key) => searchByName(key), 500), []);
    const onChange = (values) => {
        setKey(values.target.value);
        debounceSearch(values.target.value);
    }
    return (
        <CCol lg={12}>
            <div style={{ width: "30%" }}>
                <label className="inputTitle">Tìm kiếm</label>
                <CInputGroup className="mb-3" style={{ display: "flex", borderRadius: 10 }}>
                    <CInput
                        placeholder="Nhập tên tài khoản . . ."
                        onChange={onChange}
                        value={key}
                    />
                </CInputGroup>
            </div>
            <div class="table-wrapper-scroll-y my-custom-scrollbar">
                <table className="table table-hover">
                    <thead className="table-active" >
                        <th>Tên tài khoản</th>
                        <th>Số điện thoại</th>
                        <th>Địa chỉ</th>
                    </thead>
                    <tbody >
                        {
                            data && data.map((item, index) => {
                                return (
                                    <tr
                                        key={item.id}
                                        className={`${item.id === itemSelected?.id && "table-active"}`}
                                        onClick={() => { setItemSelected(item) }}
                                    >
                                        <td>{item?.username}</td>
                                        <td>{item?.phone || "dasdasdas "}</td>
                                        <td>{item?.address}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </CCol>
    )
}
export default UserTable;