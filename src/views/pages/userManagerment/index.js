import React, { useState } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import usersData from 'src/views/users/UsersData'
export default () => {
    const [itemSelected, setItemSelected] = useState({})
    const data = [
        {
            id: 1,
            name: "Nguyen Huu Manh",
            status: "Chưa phê duyệt",
            type: "Store",
        },
        {
            id: 2,
            name: "Nguyen Huu Manh",
            status: "Được phê duyệt",
            type: "Store",
        },
        {
            id: 3,
            name: "Nguyen Huu Manh",
            status: "Chưa được phê duyệt",
            type: "Store",
        }
    ]
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
                                <th>Loại tài khoản</th>
                                <th>Trạng thái</th>
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
                                                <td>{index}</td>
                                                <td>{item.name}</td>
                                                <td>{item.type}</td>
                                                <td>{item.status}</td>
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