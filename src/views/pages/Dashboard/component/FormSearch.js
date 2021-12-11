import { CButton, CCol, CRow } from "@coreui/react";
import { Field, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Card } from "reactstrap";
import { apiGetReportMonth, apiGetReportYear } from "src/apiFunctions/Dashboard";
import AppSelectTypeReport from "src/views/components/AppSelectTypeReport";
import { report } from "../validate";
import Barchart from "./Barchart";
const FormSearch = () => {
    const [data, setData] = useState({});
    const [body, setBody] = useState({ type_time: '1' });


    useEffect(() => {
        getReport(body);
    }, [body])

    const getReport = (values) => {
        // let type_points = [];
        // if (values.store) type_points.push(1);
        // if (values.relief) type_points.push(2);
        // if (values.org) type_points.push(3);
        // if (values.sos) type_points.push(4);
        const body = {
            type_point: [1, 2, 3, 4]
        }

        if (values.type_time == '1') {
            apiGetReportYear(body).then((e) => {
                if (e?.status == 200) {
                    if (e?.data.code == '200') {
                        setData({ lables: e.data.obj.label, dataChart: e.data.obj.data });
                    }
                }
            })
        } else {
            apiGetReportMonth(body).then((e) => {
                if (e?.status == 200) {
                    if (e?.data.code == '200') {
                        setData({ lables: e.data.obj.label, dataChart: e.data.obj.data });
                    }
                }
            })
        }

    }
    return (
        <Card>
            <Formik
                initialValues={{
                    type_time: "1",
                    // store: true,
                    // relief: true,
                    // org: true,
                    // sos: true
                }}
                validationSchema={report}
                validateOnBlur={false}
                validateOnChange={false}
                onSubmit={(values) => {
                    setBody({ ...values })
                }}
            >
                {({ submitForm }) => (
                    <CRow style={{ padding: 10, paddingLeft: 50 }}>
                        {/* <CCol lg={1} md={1}>
                            <Field component={CheckboxField} name="store" title="Cửa hàng" type="checkbox" />
                        </CCol>
                        <CCol lg={1} md={1}>
                            <Field component={CheckboxField} name="relief" title="Cứu trợ" type="checkbox" />
                        </CCol>
                        <CCol lg={1} md={1}>
                            <Field component={CheckboxField} name="org" title="Tổ chức" type="checkbox" />
                        </CCol>
                        <CCol lg={1} md={1}>
                            <Field component={CheckboxField} name="sos" title="SOS" type="checkbox" />
                        </CCol> */}
                        <CCol lg={3} md={3}>
                            <Field component={AppSelectTypeReport} name="type_time" title="Loại báo cáo" isClearable={false} />
                        </CCol>
                        <CCol lg={3} md={3} style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
                            <CButton
                                type="submit"
                                color="secondary"
                                onClick={() => { submitForm() }}
                                style={{ marginTop: 5 }}
                            >
                                Xem báo cáo
                            </CButton>
                        </CCol>
                    </CRow>
                )}
            </Formik>
            <Barchart data={data} />
        </Card>
    )
}
export default FormSearch;