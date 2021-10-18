import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { apiAcceptRequestAdminORG, apiGetRequestAdminORG } from 'src/apiFunctions/authencation'
import InputField from 'src/views/components/InputField'
export default () => {
    const [itemSelected, setItemSelected] = useState({})
    const [data, setData] = useState([]);
    const [body, setbody] = useState({});
    const [pageSize, setPageSize] = useState({ page: 1, size: 10 });

    const callGetReques = () => {
        apiGetRequestAdminORG().then((res) => {
            console.log(res, "res");
            if (res.status && res.data.code) {
                setData(res.data.obj);
            }
        });
    }

    useEffect(() => {
        callGetReques()
    }, [pageSize])

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
                        Điều kiện tìm kiếm
                    </CCardHeader>
                    <CCardBody>
                        <Formik
                            initialValues={{

                            }}
                            onSubmit={(values) => {
                                setbody({ ...values })
                            }}
                        >
                            {() => (
                                <Form>
                                    <CRow>
                                        <CCol md={3}>
                                            <Field
                                                component={InputField}
                                                title="Loại tài khoản"
                                            />
                                        </CCol>
                                        <CCol md={3}>
                                            <Field
                                                component={InputField}
                                                title="Loại tài khoản"
                                            />
                                        </CCol>
                                        <CCol md={3}>
                                            <Field
                                                component={InputField}
                                                title="Loại tài khoản"
                                            />
                                        </CCol>
                                        <CCol md={3} className="d-flex justify-content-center align-items-center">
                                            <CButton type="submit" color="secondary" >Tìm kiếm</CButton>
                                        </CCol>
                                    </CRow>
                                </Form>
                            )}
                        </Formik>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol lg={12}>
                <CCard>
                    <CCardHeader>
                        Danh sách tổ chức
                    </CCardHeader>
                    <CCardBody>
                        <table className="table table-hover">
                            <thead className="table-active">
                                <th>STT</th>
                                <th><input type="checkbox" /></th>
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
                                                <td><input type="checkbox" /></td>
                                                <td>{item?.name}</td>
                                                <td>{item?.status}</td>
                                                <td>
                                                    <CButton color="secondary" onClick={() => { accpetRequestORG(item) }}>
                                                        Active
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
            </CCol>
        </CRow>
    )
}