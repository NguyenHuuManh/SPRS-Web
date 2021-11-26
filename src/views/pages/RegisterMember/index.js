import {
  CButton,
  CCard,
  CCardBody, CCardHeader, CCol,
  CContainer,
  CForm, CRow
} from '@coreui/react'
import { Field, Formik } from 'formik'
import React, { useState } from 'react'
import { apiSigupUserORG } from 'src/apiFunctions/authencation'
import AppDatePicker from 'src/views/components/AppDatePicker'
import AppSelectHuyen from 'src/views/components/AppSelectHuyen'
import AppSelectTinh from 'src/views/components/AppSelectTinh'
import AppSelectXa from 'src/views/components/AppSelectXa'
import { appToast } from 'src/views/components/AppToastContainer'
import InputField from 'src/views/components/InputField'
import { register } from './validate'

const RegisterMember = () => {
  const [orgAdress, setOrgAdress] = useState({});
  const [tinh, setTinh] = useState({});
  const [huyen, setHuyen] = useState({});
  const singup = (values) => {
    apiSigupUserORG(values).then((res) => {
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
              <CCardHeader>
                <h1>Register</h1>
              </CCardHeader>
              <CCardBody className="p-4">
                <CForm>
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
                      groupsId: "3",
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
                    {({ submitForm, errors }) => (
                      <>
                        {console.log("error", errors)}
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
                          component={AppDatePicker}
                          name="dob"
                          title="Ngày sinh"
                        />
                        <Field
                          component={AppSelectTinh}
                          title="Tỉnh/thành phố"
                          name="city"
                          functionProps={setTinh}
                          maxTitle={170}
                          horizontal
                        />
                        <Field
                          component={AppSelectHuyen}
                          title="Quận/huyện"
                          name="district"
                          idTinh={tinh?.id}
                          functionProps={setHuyen}
                          maxTitle={170}
                          horizontal
                        />
                        <Field
                          component={AppSelectXa}
                          title="Xã phường"
                          name="subDistrict"
                          idHuyen={huyen?.id}
                          maxTitle={170}
                          horizontal
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

export default RegisterMember;
