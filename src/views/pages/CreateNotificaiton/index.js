import { CButton, CCard, CCardBody, CCol, CHeader, CRow } from "@coreui/react";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { CardHeader } from "reactstrap";
import AppSelectHuyen from "src/views/components/AppSelectHuyen";
import AppSelectTinh from "src/views/components/AppSelectTinh";
import AppSelectXa from "src/views/components/AppSelectXa";
import TextAreaField from "src/views/components/TextAreaField";
import GroupTable from "./component/GroupTable";
const CreateNotificaton = () => {
    const [tinh, setTinh] = useState({});
    const [huyen, setHuyen] = useState({});
    return (
        <CCard>
            <CardHeader>Tạo thông báo</CardHeader>
            <CCardBody>
                <Formik
                    initialValues={{
                        datefrom: "",
                        tinh: "",
                        huyen: "",
                        xa: "",
                    }}
                    onSubmit={(values) => {
                        // setbody({ ...values })
                    }}
                >
                    {({ values }) => (
                        <Form>
                            <CRow>
                                <CCol lg={6}>
                                    <GroupTable />
                                </CCol>
                                <CCol md={6}>
                                    <CRow>
                                        <CCol>
                                            <Field
                                                component={AppSelectTinh}
                                                title="Tỉnh/thành phố"
                                                name="tinh"
                                                functionProps={setTinh}
                                            />
                                        </CCol>
                                        <CCol>
                                            <Field
                                                component={AppSelectHuyen}
                                                title="Quận/huyện"
                                                name="huyen"
                                                idTinh={tinh?.id}
                                                functionProps={setHuyen}
                                            />
                                        </CCol>
                                        <CCol>
                                            <Field
                                                component={AppSelectXa}
                                                title="Xã phường"
                                                name="xa"
                                                idHuyen={huyen?.id}
                                            />
                                        </CCol>
                                    </CRow>
                                    <div style={{ height: 259 }}>
                                        <Field
                                            title="Nội dung"
                                            component={TextAreaField}
                                            name="noiDung"
                                            type="TextArea"
                                        />
                                    </div>
                                </CCol>

                            </CRow>

                            <CRow>
                                <CCol md={12}>
                                    <div className="d-flex justify-content-end align-items-end" style={{ width: "100%" }}>
                                        <CButton type="submit" color="secondary" >Gửi</CButton>
                                    </div>
                                </CCol>
                            </CRow>
                        </Form>
                    )}
                </Formik>
            </CCardBody>
        </CCard>
    )
}
export default CreateNotificaton;