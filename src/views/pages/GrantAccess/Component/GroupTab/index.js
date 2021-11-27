import { CButton, CCardBody, CCol, CRow } from '@coreui/react';
import { debounce, isEmpty } from 'lodash-es';
import React, { useCallback, useEffect, useState } from "react";
import { Card, CardHeader } from "reactstrap";
import { apiGetGroupAuthoried, apiGetGroupUnAuthoried, apiGrantGroupPermission, apiGrantGroupUnPermission, apiGrantUserPermission, apiGrantUserUnPermission } from 'src/apiFunctions/permission';
import UserTable from './UserTable';
const Group = () => {
    const [itemSelected, setItemSelected] = useState(1);
    const [dataPermisstion, setDataPermission] = useState([]);
    const [dataUnPermisstion, setDataUnPermission] = useState([]);


    const getPermission = (id) => {
        apiGetGroupAuthoried(id).then((e) => {
            setDataPermission(e.data.lstObj);
        })
        apiGetGroupUnAuthoried(id).then((e) => {
            setDataUnPermission(e.data.lstObj)
        })
    }

    useEffect(() => {
        if (isEmpty(itemSelected) || !itemSelected) {
            setDataPermission([]);
            setDataUnPermission([]);
            return;
        };
        getPermission(itemSelected.id)

    }, [itemSelected])



    const grantPermission = ({ source_id, target_id }) => {
        apiGrantGroupPermission({ source_id, target_id }).then((e) => {
            if (e?.status === 200) {
                if (e?.data?.code === '200') {
                    getPermission(itemSelected.id);
                }
            }
        })
    }

    const grantUnPermission = ({ source_id, target_id }) => {
        apiGrantGroupUnPermission({ source_id: source_id, target_id: target_id }).then((e) => {
            if (e?.status === 200) {
                if (e?.data?.code === '200') {
                    getPermission(itemSelected.id);
                }
            }
        })
    }

    return (
        <CRow>
            <UserTable itemSelected={itemSelected} setItemSelected={setItemSelected} />
            <CCol lg={6}>
                <Card>
                    <CCardBody>
                        <div class="table-wrapper-scroll-y my-custom-scrollbar">
                            <table className="table table-hover">
                                <thead className="table-active">
                                    <th>Nhóm quyền chưa được phân</th>
                                    <th></th>
                                </thead>
                                <tbody>
                                    {
                                        dataUnPermisstion && dataUnPermisstion.map((item, index) => {
                                            return (
                                                <tr
                                                    key={item.id}
                                                    style={{ border: "none" }}
                                                >
                                                    <td><CButton onClick={() => { grantPermission({ source_id: itemSelected.id, target_id: item.id }) }}>Cấp quyền</CButton></td>
                                                    <td>{item?.name}</td>

                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </CCardBody>
                </Card>
            </CCol>

            <CCol lg={6}>
                <Card>
                    <CCardBody>
                        <div class="table-wrapper-scroll-y my-custom-scrollbar">
                            <table className="table table-hover">
                                <thead className="table-active">
                                    <th>Nhóm quyền được phân</th>
                                    <th></th>
                                </thead>
                                <tbody>
                                    {
                                        dataPermisstion && dataPermisstion.map((item, index) => {
                                            return (
                                                <tr
                                                    key={item.id}
                                                    style={{ border: "none" }}
                                                >
                                                    <td><CButton onClick={() => { grantUnPermission({ source_id: itemSelected.id, target_id: item.id }) }}>xóa quyền</CButton></td>
                                                    <td>{item?.name}</td>

                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </CCardBody>
                </Card>
            </CCol>
        </CRow >
    )
}
export default Group;