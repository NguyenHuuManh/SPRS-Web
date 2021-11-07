import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CRow
} from "@coreui/react";
import { Field, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { loginRequest } from "src/redux/modules/auth";
import AppLoading from "src/views/components/AppLoading";
import InputField from "src/views/components/InputField";

const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer.auth);

  if (auth.isLogin) {
    return <Redirect to="/" />;
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <AppLoading isOpen={auth.isLoading} />
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <h1>Login</h1>
                  <p className="text-muted">Sign In to your account</p>
                  <Formik
                    initialValues={{
                      username: "manh",
                      password: "u3WvyfOA",
                    }}
                    onSubmit={(values) => {
                      dispatch(loginRequest(values));
                    }}
                  >
                    {({ submitForm }) => (
                      <>
                        <Field
                          component={InputField}
                          name="username"
                          iconName="cil-user"
                        />
                        <Field
                          component={InputField}
                          name="password"
                          iconName="cil-lock-locked"
                        />
                        <CRow>
                          <CCol xs="6">
                            <CButton
                              color="primary"
                              className="px-4"
                              onClick={() => {
                                submitForm();
                              }}
                            >
                              Login
                            </CButton>
                          </CCol>
                          <CCol xs="6" className="text-right">

                            <Link to="/forgot">
                              <CButton color="link" className="px-0">
                                Forgot password?
                              </CButton>
                            </Link>
                          </CCol>
                        </CRow>
                      </>
                    )}
                  </Formik>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-primary py-5 "
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Quản lý tổ chức dễ dàng hơn với SPRS site
                    </p>
                    <Link to="/register">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
