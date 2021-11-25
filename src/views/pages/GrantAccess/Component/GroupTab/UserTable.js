import { CCol } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { apiGetUsers } from "src/apiFunctions/permission";
const UserTable = (props) => {
    const { itemSelected, setItemSelected } = props
    const [data, setData] = useState([])
    const getAll = () => {
        apiGetUsers().then((e) => {
            if (e.data.code === '200') {
                setData(e.data.lstObj);
            }
        })
    }
    useEffect(() => {
        getAll();
    }, []);
    return (
        <CCol lg={12}>
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