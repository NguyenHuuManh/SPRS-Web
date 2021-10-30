import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { FaEye } from 'react-icons/fa';
import { apiGetRequestRejectedAdminORG } from 'src/apiFunctions/authencation';
import { isAllItemOnPageChecked } from 'src/helps/checklistFunction';
export default () => {
    const [itemSelected, setItemSelected] = useState({});
    const [pageSize, setPageSize] = useState({ page: 1, size: 30 });
    const [data, setData] = useState([]);

    const callGetRequestRejected = () => {
        apiGetRequestRejectedAdminORG().then((res) => {
            console.log(res, "res");
            if (res.status && res.data.code) {
                setData(res.data.obj);
            }
        });
    }

    useEffect(() => {
        callGetRequestRejected()
    }, [pageSize])
    return (
        <CCard>
            <CCardHeader>
                <CRow>
                    <CCol md={6}>
                        Danh sách tài khoản bị từ chối
                    </CCol>
                </CRow>
            </CCardHeader>
            <CCardBody>
                <table className="table table-hover">
                    <thead className="table-active">
                        <th>STT</th>
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
                                        <td>{item?.user?.full_name}</td>
                                        <td>{item?.user?.username}</td>
                                        <td>{item?.user?.phone}</td>
                                        <td>{item?.user?.organization?.name}</td>
                                        <td>{item?.user?.organization?.address?.addressLine}</td>
                                        <td>{item?.status}</td>
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