import { CButton, CCard, CCardBody, CCol, CRow, CCardHeader } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { FaEye } from 'react-icons/fa';
import { apiAcceptRequestAdminORG, apiRejectRequestAdminORG } from 'src/apiFunctions/authencation';
import { addAllItemOfPage, addAnItems, isAllItemOnPageChecked, removeCheckAllItems } from 'src/helps/checklistFunction';
import { appToast } from 'src/views/components/AppToastContainer';
const RequestManage = ({ data, pageSize, setPageSize }) => {
    const [items, setItems] = useState([]);
    const [itemSelected, setItemSelected] = useState({})

    useEffect(() => {
        setItems([]);
    }, [data])

    const accpetRequestORG = () => {
        const ids = items.map((e) => e.id);
        apiAcceptRequestAdminORG(ids).then((e) => {
            if (e.status == 200 && e.data.code == "200") {
                appToast({
                    toastOptions: { type: "success" },
                    description: "Active success!",
                });
                setPageSize({ ...pageSize })
            }
        })
    }

    const rejectRequestORG = (item) => {
        apiRejectRequestAdminORG([item.id]).then((e) => {
            if (e.status == 200 && e.data.code == "200") {
                appToast({
                    toastOptions: { type: "success" },
                    description: "Reject success!",
                });
                setPageSize({ ...pageSize })
            }
        })
    }

    const handleCheckAll = () => {
        // checkDcThaoTac();
        if (isAllItemOnPageChecked(items, data, "id")) {
            setItems(removeCheckAllItems(items, data, "id"));
        } else {
            setItems(addAllItemOfPage(items, data, "id"));
        }
    };

    const onSelectedItem = (e, item) => {
        setItems(addAnItems(items, item, "id"));
        e.stopPropagation();
    };
    return (
        <CCard>
            <CCardHeader>
                <CRow>
                    <CCol md={6}>
                        Danh sách tổ chức
                    </CCol>
                    <CCol md={6} className="d-flex align-items-center justify-content-end">
                        <CButton type="submit" color="secondary" onClick={accpetRequestORG} >accept</CButton>
                    </CCol>
                </CRow>
            </CCardHeader>
            <CCardBody>
                <table className="table table-hover">
                    <thead className="table-active">
                        <th>STT</th>
                        <th>
                            <input type="checkbox"
                                onChange={handleCheckAll}
                                checked={Boolean(isAllItemOnPageChecked(items, data, "id"))}
                            /></th>
                        <th>Tên đầy đủ</th>
                        <th>Tên tài khoản</th>
                        <th>Số điện thoại</th>
                        <th>Tên tổ chức</th>
                        <th>Địa chỉ tổ chức</th>
                        <th>Trạng thái</th>
                        <th>Thao tác</th>
                        <th></th>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => {
                                return (
                                    <tr
                                        key={item.id}
                                        className={`${item.id == itemSelected?.id && "table-active"}`}
                                        onClick={() => { setItemSelected(item) }}
                                    >
                                        <td>{index + 1}</td>
                                        <td>
                                            <input type="checkbox"
                                                checked={Boolean(items.filter((elm) => elm.id === item.id).length > 0)}
                                                onChange={(e) => onSelectedItem(e, item)}
                                            />
                                        </td>
                                        <td>{item?.user?.full_name}</td>
                                        <td>{item?.user?.username}</td>
                                        <td>{item?.user?.phone}</td>
                                        <td>{item?.user?.organization?.name}</td>
                                        <td>{item?.user?.organization?.address?.addressLine}</td>
                                        <td>{item?.status}</td>
                                        <td>
                                            <CButton color="secondary" onClick={() => { rejectRequestORG(item) }}>
                                                Reject
                                            </CButton>
                                        </td>
                                        <td style={{ justifyContent: "center" }}>
                                            <CButton onClick={() => { }} >
                                                <FaEye size={20} />
                                            </CButton>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </CCardBody>
        </CCard>
    )
}
export default RequestManage;