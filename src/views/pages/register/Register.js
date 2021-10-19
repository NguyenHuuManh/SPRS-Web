import {
  CButton,
  CCard,
  CCardBody, CCol,
  CContainer,
  CForm, CRow
} from '@coreui/react'
import { Field, Formik } from 'formik'
import React, { useState } from 'react'
import { apiSigup } from 'src/apiFunctions/authencation'
import { appToast } from 'src/views/components/AppToastContainer'
import InputField from 'src/views/components/InputField'
import Mappicker from 'src/views/components/Mappicker'
import { register } from './validate'

const Register = () => {
  const [orgAdress, setOrgAdress] = useState({});
  const singup = (values) => {
    apiSigup(values).then((res) => {
      console.log("resSignup", res);
      if (res.status == 200 && res.data.code == "200") {
        appToast({
          toastOptions: { type: "success" },
          description: "Đăng ký thành công",
        });
      } else {
        appToast({
          toastOptions: { type: "error" },
          description: res?.data?.message || "Đăng ký không thành công, hệ thống đang bảo trì",
        });
      }
    })
  }
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
                      nameOrg: "",
                      city: "",
                      province: "",
                      district: "",
                      subDistrict: "",
                      addressLine: "",
                      groupsId: "4",
                      adresslineORG: "",
                      adressString: "",
                    }}
                    validateOnBlur={false}
                    validateOnChange={false}
                    validationSchema={register}
                    onSubmit={(values) => {
                      let user = {
                        username: values.username,
                        phone: values.phone,
                        password: values.password,
                        full_name: values.full_name,
                        dob: values.dob,
                        address: {
                          city: values.city || "",
                          province: values?.province || "",
                          district: values?.district || "",
                          subDistrict: values?.subDistrict || "",
                          addressLine: values?.addressLine || "",
                        },
                        groups_user: [{ id: values.groupsId }],
                        organization: {
                          name: values?.nameOrg || "",
                          founded: "",
                          description: "",
                          address: {
                            city: orgAdress.city || "",
                            province: orgAdress?.province || "",
                            district: orgAdress?.district || "",
                            subDistrict: orgAdress?.subDistrict || "",
                            addressLine: values?.adresslineORG || "",
                          }
                        }

                      }
                      singup(user);
                    }}
                  >
                    {({ submitForm }) => (
                      <>
                        <Field
                          horizontal
                          component={InputField}
                          name="username"
                          maxTitle={170}
                          title="Tên tài khoản"
                        />
                        <Field
                          horizontal
                          component={InputField}
                          name="full_name"
                          title="Họ và tên"
                          maxTitle={170}
                        />
                        <Field
                          horizontal
                          component={InputField}
                          name="phone"
                          maxTitle={170}
                          title="Số điện thoại"
                        />
                        <Field
                          maxTitle={170}
                          horizontal
                          component={InputField}
                          name="dob"
                          title="Ngày sinh"
                        />
                        <Field
                          maxTitle={170}
                          horizontal
                          component={InputField}
                          name="city"
                          title="Tỉnh/Thành phố"
                        />
                        <Field
                          maxTitle={170}
                          horizontal
                          component={InputField}
                          name="district"
                          title="Quận/Huyện"
                        />
                        <Field
                          maxTitle={170}
                          horizontal
                          component={InputField}
                          name="subDistrict"
                          title="Xã/Phường"
                        />
                        <Field
                          maxTitle={170}
                          horizontal
                          component={InputField}
                          name="nameOrg"
                          title="Tên tổ chức"
                        />
                        <Field
                          maxTitle={170}
                          horizontal
                          component={Mappicker}
                          name="adressString"
                          title="Địa chỉ tổ chức"
                          adress={orgAdress}
                          setAdress={setOrgAdress}
                          iconName={"cil-map"}
                        />
                        <Field
                          maxTitle={170}
                          horizontal
                          component={InputField}
                          name="password"
                          title="Mật khẩu"
                          type="password"
                        />
                        <Field
                          maxTitle={170}
                          horizontal
                          component={InputField}
                          name="rePassWord"
                          title="Nhập lại mật khẩu"
                          type="password"
                        />
                        <CRow>
                          <CCol>
                            <CButton color="success" block onClick={submitForm}>Đăng ký</CButton>
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
