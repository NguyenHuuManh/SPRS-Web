import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { apiAcceptRequestAdminORG, apiGetRequestAdminORG } from 'src/apiFunctions/authencation'
export default () => {
    const [itemSelected, setItemSelected] = useState({})
    const [data, setData] = useState([])

    useEffect(() => {
        apiGetRequestAdminORG().then((res) => {
            console.log(res, "res");
            if (res.status && res.data.code) {
                setData(res.data.obj);
            }
        });
    }, [])

    const accpetRequestORG = (item) => {
        apiAcceptRequestAdminORG(item).then((e) => {
            console.log("e", e);
        })
    }
    return (
        <CRow>
            <CCol lg={12}>
                <CCard>
                    <CCardHeader>
                        Danh sách user
                    </CCardHeader>
                    <CCardBody>
                        <table className="table table-hover">
                            <thead className="table-active">
                                <th>STT</th>
                                <th>Tên</th>
                                <th>Trạng thái</th>
                                <th>Thao tác</th>
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
                                                <td>{item?.name}</td>
                                                <td>{item?.status}</td>
                                                <td>
                                                    <button className="px-0" onClick={() => { accpetRequestORG(item) }}>
                                                        Active
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}