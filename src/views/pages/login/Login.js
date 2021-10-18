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
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { loginRequest } from "src/redux/modules/auth";
import InputField from "src/views/InputField";
import { appToast } from "../../components/AppToastContainer"

const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer.auth);

  if (auth.isLogin) {
    return <Redirect to="/" />;
  }



  return (
    <div className="c-app c-default-layout flex-row align-items-center">
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
                      username: "admin",
                      password: "password",
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
                            <CButton color="link" className="px-0">
                              Forgot password?
                            </CButton>
                          </CCol>
                        </CRow>
                      </>
                    )}
                  </Formik>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-primary py-5 d-md-down-none"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
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
