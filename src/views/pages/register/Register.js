import {
  CButton,
  CCard,
  CCardBody, CCol,
  CContainer,
  CForm, CRow
} from '@coreui/react'
import { Field, Formik } from 'formik'
import React from 'react'
import InputField from 'src/views/components/InputField'

const Register = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <Formik
                    initialValues={{
                      username: "Duongpt35",
                      phone: "0966048002",
                      password: "password",
                      rePassWord: "password",
                      full_name: "Phạm Tùng Dương",
                      dob: "09/09/1999",
                      city: "",
                      province: "",
                      district: "",
                      subDistrict: "",
                      addressLine: "",
                      groupsId: "1",
                      adresslineORG: "",
                    }}
                    onSubmit={(values) => {
                      // dispatch(loginRequest(values));
                    }}
                  >
                    {({ submitForm }) => (
                      <>
                        <Field
                          component={InputField}
                          name="username"
                          // iconName="cil-user"
                          title="Tên tài khoản"
                        />
                        <Field
                          component={InputField}
                          name="full_name"
                          title="Họ và tên"
                        // iconName="cil-lock-locked"
                        />
                        <Field
                          component={InputField}
                          name="phone"
                          // iconName="cil-user"
                          title="Số điện thoại"
                        />
                        <Field
                          component={InputField}
                          name="dob"
                          // iconName="cil-lock-locked"
                          title="Ngày sinh"
                        />
                        <Field
                          component={InputField}
                          name="city"
                          // iconName="cil-lock-locked"
                          title="Tỉnh/Thành phố"
                        />
                        <Field
                          component={InputField}
                          name="district"
                          // iconName="cil-lock-locked"
                          title="Quận/Huyện"
                        />
                        <Field
                          component={InputField}
                          name="subDistrict"
                          // iconName="cil-lock-locked"
                          title="Xã/Phường"
                        />
                        <Field
                          component={InputField}
                          name="password"
                          // iconName="cil-lock-locked"
                          title="Mật khẩu"
                        />
                        <Field
                          component={InputField}
                          name="rePassword"
                          // iconName="cil-lock-locked"
                          title="Nhập lại mật khẩu"
                        />
                        <CRow>
                          <CCol>
                            <CButton color="success" block>Đăng ký</CButton>
                          </CCol>
                        </CRow>
                        <CRow className="d-flex justify-content-center align-items-center">
                          <div style={{ paddingTop: 10 }}>
                            <a href="/login">Đăng nhập</a>
                          </div>
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
    </div>
  )
}

export default Register
