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
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { loginRequest } from "src/redux/modules/auth";
import InputField from "src/views/components/InputField";

const ForgotPassword = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.authReducer.auth);
    const [isOtp, setIsOtp] = useState(false);
    const [isChangePass, setIsChangePass] = useState(false);
    const [isPhone, setIsPhone] = useState(true);



    if (auth.isLogin) {
        return <Redirect to="/" />;
    }

    return (
        <div className="c-app c-default-layout flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md="5">
                        <CCardGroup>
                            <CCard className="p-4">
                                <CCardBody>
                                    <h1>Forgot Password</h1>
                                    <p className="text-muted">reset your account</p>
                                    {isPhone && (
                                        <Formik
                                            initialValues={{
                                                to: "0343700317",
                                            }}
                                            onSubmit={(values) => {
                                                setIsOtp(true);
                                                setIsPhone(false);
                                            }}
                                        >
                                            {({ submitForm }) => (
                                                <>
                                                    <Field
                                                        component={InputField}
                                                        name="to"
                                                        iconName="cil-phone"
                                                        title="Số điện thoại: "
                                                    />
                                                    <div className="d-flex justify-content-start align-items-center" >
                                                        <CButton color="success" onClick={submitForm}>Gửi</CButton>
                                                    </div>
                                                </>
                                            )}
                                        </Formik>
                                    )}
                                    {isOtp && (
                                        <Formik
                                            initialValues={{
                                                to: "0343700317",
                                            }}
                                            onSubmit={(values) => {
                                                setIsOtp(false);
                                                setIsChangePass(true);
                                            }}
                                        >
                                            {({ submitForm }) => (
                                                <>
                                                    <Field
                                                        component={InputField}
                                                        name="to"
                                                        iconName="cil-barcode"
                                                        title="Mã OTP: "
                                                    />
                                                    <div className="d-flex justify-content-start align-items-center" >
                                                        <CButton color="success" onClick={submitForm}>Gửi</CButton>
                                                    </div>
                                                </>
                                            )}
                                        </Formik>
                                    )}
                                    {isChangePass && (
                                        <Formik
                                            initialValues={{
                                                password: "",
                                                rePassword: "",
                                            }}
                                            onSubmit={(values) => {
                                                history.push("/login");
                                            }}
                                        >
                                            {({ submitForm }) => (
                                                <>
                                                    <Field
                                                        component={InputField}
                                                        name="password"
                                                        iconName="cil-lock-locked"
                                                        title="Nhập mật khẩu mới:  "
                                                    />
                                                    <Field
                                                        component={InputField}
                                                        name="rePassword"
                                                        iconName="cil-lock-locked"
                                                        title="Nhập lại mật khẩu mới: "
                                                    />
                                                    <div className="d-flex justify-content-start align-items-center" >
                                                        <CButton color="success" onClick={submitForm}>Gửi</CButton>
                                                    </div>
                                                </>
                                            )}
                                        </Formik>
                                    )}
                                </CCardBody>
                            </CCard>
                        </CCardGroup>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    );
};

export default ForgotPassword;
