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
import { useHistory } from "react-router-dom";
import { apiOtpPassword, apiResetPass } from "src/apiFunctions/authencation";
import { appToast } from "src/views/components/AppToastContainer";
import InputField from "src/views/components/InputField";

const ForgotPassword = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.authReducer.auth);
    const [isOtp, setIsOtp] = useState(false);
    const [isPhone, setIsPhone] = useState(true);
    const [phone, setPhone] = useState();

    const getOtp = (values) => {
        console.log("values", values);
        apiOtpPassword(values).then((e) => {
            console.log("e", e);
            if (e.status == 200 && e.data.code == "200") {
                setIsOtp(true);
                setIsPhone(false);
                setPhone(values.to);
            }
        })
    }
    const checkOTP = (values) => {
        apiResetPass(values).then((res) => {
            if (res.status == 200) {
                if (res.data.code == "200") {
                    appToast({
                        toastOptions: { type: "error" },
                        description: "khôi phục mật khẩu thành công",
                    });
                    history.replace("/Login");
                } else {
                    appToast({
                        toastOptions: { type: "error" },
                        description: "Chức năng đang bảo trì",
                    });
                }
            }
        })
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
                                                to: "966048002",
                                            }}
                                            onSubmit={(values) => {
                                                getOtp({ to: "+84" + values.to })
                                            }}
                                        >
                                            {({ submitForm }) => (
                                                <>
                                                    <Field
                                                        component={InputField}
                                                        name="to"
                                                        iconName="cil-phone"
                                                        title="Số điện thoại: "
                                                        isPhone
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
                                                otp: "",
                                            }}
                                            onSubmit={(values) => {
                                                checkOTP({ otp: values.otp, to: phone })
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
