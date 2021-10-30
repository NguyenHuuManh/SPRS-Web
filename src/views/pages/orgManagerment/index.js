import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { apiGetRequestAdminORG } from 'src/apiFunctions/authencation'
import AppSelectHuyen from 'src/views/components/AppSelectHuyen'
import AppSelectTinh from 'src/views/components/AppSelectTinh'
import AppSelectXa from 'src/views/components/AppSelectXa'
import RejectManage from './component/RejectManage'
import RequestManage from './component/RequestManage'
export default () => {

    const [data, setData] = useState([]);
    const [body, setbody] = useState({});
    const [pageSize, setPageSize] = useState({ page: 1, size: 10 });

    const [tinh, setTinh] = useState({});
    const [huyen, setHuyen] = useState({});

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



    useEffect(() => {
        console.log("body", body);
    }, [body])


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
                                datefrom: "",
                                tinh: "",
                                huyen: "",
                                xa: "",
                            }}
                            onSubmit={(values) => {
                                setbody({ ...values })
                            }}
                        >
                            {({ values }) => (
                                <Form>
                                    <CRow>
                                        <CCol md={3}>
                                            <Field
                                                component={AppSelectTinh}
                                                title="Tỉnh/thành phố"
                                                name="tinh"
                                                functionProps={setTinh}
                                            />
                                        </CCol>
                                        <CCol md={3}>
                                            <Field
                                                component={AppSelectHuyen}
                                                title="Quận/huyện"
                                                name="huyen"
                                                idTinh={tinh?.id}
                                                functionProps={setHuyen}
                                            />
                                        </CCol>
                                        <CCol md={3}>
                                            <Field
                                                component={AppSelectXa}
                                                title="Xã phường"
                                                name="xa"
                                                idHuyen={huyen?.id}
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
                <RequestManage data={data} pageSize={pageSize} setPageSize={setPageSize} />
            </CCol>
            <CCol lg={12}>
                <RejectManage />
            </CCol>
        </CRow>
    )
}