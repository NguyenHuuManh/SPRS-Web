import { CButton, CCol, CRow } from "@coreui/react";
import { Field, Formik } from "formik";
import { isEmpty } from "lodash-es";
import moment from "moment";
import React, { useState } from "react";
import { Card } from "reactstrap";
import { apiGetReport } from "src/apiFunctions/Dashboard";
import AppDatePicker from "src/views/components/AppDatePicker";
import AppSelectHuyen from "src/views/components/AppSelectHuyen";
import AppSelectTinh from "src/views/components/AppSelectTinh";
import AppSelectTypePoint from "src/views/components/AppSelectTypePoint";
import AppSelectTypeReport from "src/views/components/AppSelectTypeReport";
import AppSelectXa from "src/views/components/AppSelectXa";
import { report } from "../validate";
import Barchart from "./Barchart";
const FormSearch = () => {
    const [tinh, setTinh] = useState({});
    const [huyen, setHuyen] = useState({});
    const [data, setData] = useState({});

    const divData = (arr, type) => {
        if (arr.length == 0) return arr;
        if (type + '' === '3') {
            let count = Math.ceil(arr.length / 30);
            if (count <= 1) return arr;
            let arrTem = [];
            for (let i = 0; i < 30; i++) {
                arrTem.push(arr[i * count]);
            }
            return;
        }
        if (type + '' === '2' || type + '' === '2') {
            let count = Math.ceil(arr.length / 12);
            if (count <= 1) return arr;
            let arrTem = [];
            for (let i = 0; i < 12; i++) {
                arrTem.push(arr[i * count]);
            }
            return arrTem;
        }

        let count = Math.ceil(arr.length / 12);
        if (count <= 1) return arr;
        let arrTem = [];
        for (let i = 0; i < 12; i++) {
            arrTem.push(arr[i * count]);
        }
        return arrTem;
    }
    const getReport = (values) => {
        apiGetReport(values).then((e) => {
            if (e.status == 200) {
                if (e.data.code == '200') {
                    const arr = e?.data?.obj || []


                    const dataChart = arr.map((element) => {
                        if (isEmpty(values.type_point + '')) {
                            return {
                                item1: element.type_point + '' === '1' ? element.total : 0,
                                item2: element.type_point + '' === '2' ? element.total : 0,
                                item3: element.type_point + '' === '3' ? element.total : 0,
                                item4: element.type_point + '' === '4' ? element.total : 0
                            }
                        }
                        if (values.type_point + '' === '1')
                            return {
                                item1: element.total | 0
                            };
                        if (values.type_point + '' === '2')
                            return {
                                item1: element.total | 0
                            };
                        if (values.type_point + '' === '3')
                            return {
                                item1: element.total | 0
                            };
                        if (values.type_point + '' === '4')
                            return {
                                item1: element.total | 0
                            };
                    })
                    const lableChart = arr.map((element, index) => {
                        if (values.type_time === '1') return element?.year
                        if (values.type_time === '2') return element?.month
                        if (values.type_time === '3') return element?.day | index

                    })
                    setData({ dataChart: divData(dataChart, values.type_point), lableChart: divData(lableChart, values.type_point) });
                }
            }

        })
    }
    return (
        <Card>
            <Formik
                initialValues={{
                    district_id: "",
                    sub_district_id: "",
                    city_id: "",
                    date_from: "",
                    date_to: "",
                    type_time: "",
                    type_point: "",
                }}
                validationSchema={report}
                validateOnBlur={false}
                validateOnChange={false}
                onSubmit={(values) => {
                    // console.log("date_from", values.date_from)
                    // console.log("date_to", values.date_to)
                    const body = {
                        ...values,
                        date_from: isEmpty(values.date_from + "") ? "" : moment(values.date_from).format("YYYY-MM-DD"),
                        date_to: isEmpty(values.date_to + "") ? "" : moment(values.date_to).format("YYYY-MM-DD"),
                    }
                    getReport(body);
                }}
            >
                {({ values, submitForm }) => (
                    <CRow style={{ padding: 10 }}>
                        <CCol lg={3}>
                            <Field component={AppSelectTinh} name="district_id" functionProps={setTinh} title="Tỉnh/thành phố" />
                        </CCol>
                        <CCol lg={3}>
                            <Field component={AppSelectHuyen} name="sub_district_id" title="Tỉnh/thành phố" functionProps={setHuyen} idTinh={tinh?.id} />
                        </CCol>
                        <CCol lg={3}>
                            <Field component={AppSelectXa} name="city_id" title="Tỉnh/thành phố" idHuyen={huyen?.id} />
                        </CCol>
                        <CCol lg={3}>
                            <Field component={AppSelectTypePoint} name="type_point" title="Loại điểm" />
                        </CCol>
                        <CCol lg={3}>
                            <Field component={AppSelectTypeReport} name="type_time" title="Loại báo cáo" />
                        </CCol>
                        <CCol lg={3}>
                            <Field component={AppDatePicker} name="date_from" title="Từ ngày" />
                        </CCol>
                        <CCol lg={3}>
                            <Field component={AppDatePicker} name="date_to" title="Đến" />
                        </CCol>
                        <CCol lg={3} style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
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