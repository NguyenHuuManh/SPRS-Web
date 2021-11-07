import {
    CButton,
    CCard,
    CCardBody, CCardHeader, CCardTitle, CCol,
    CContainer,
    CForm, CRow
} from '@coreui/react'
import { Field, Formik } from 'formik'
import React from 'react'
import InputField from 'src/views/components/InputField'
import { updatePass } from './validate'

const UpdatePassword = () => {

    return (
        <div className="c-app c-default-layout flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md="9" lg="7" xl="6">
                        <CCard className="mx-4">
                            <CCardHeader>
                                <h1>Thay đổi mật khẩu</h1>
                            </CCardHeader>
                            <CCardBody className="p-4">
                                <CForm>
                                    <Formik
                                        initialValues={{
                                            oldPasword: "u3WvyfOA",
                                            newPassword: "",
                                            reNewPassword: "",
                                        }}
                                        validateOnBlur={false}
                                        validateOnChange={false}
                                        validationSchema={updatePass}
                                        onSubmit={(values) => {

                                        }}
                                    >
                                        {({ submitForm }) => (
                                            <>
                                                <Field
                                                    horizontal
                                                    component={InputField}
                                                    name="oldPasword"
                                                    maxTitle={200}
                                                    title="Mật khẩu cũ"
                                                    type="password"
                                                />
                                                <Field
                                                    horizontal
                                                    component={InputField}
                                                    name="newPassword"
                                                    title="Mật khẩu mới"
                                                    maxTitle={200}
                                                    type="password"
                                                />
                                                <Field
                                                    horizontal
                                                    component={InputField}
                                                    name="reNewPassword"
                                                    maxTitle={200}
                                                    title="Nhập lại mật khẩu mới"
                                                    type="password"
                                                />
                                                <CRow>
                                                    <CCol>
                                                        <CButton color="success" block onClick={submitForm}>Cập nhật</CButton>
                                                    </CCol>
                                                </CRow>
                                            </>
                                        )}
                                    </Formik>
                                </CForm>
                            </CCardBody>

                        </CCard>
                    </CCol>
                </CRow>
            </CContainer>
        </div >
    )
}

export default UpdatePassword
