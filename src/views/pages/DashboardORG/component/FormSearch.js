import { CCol, CRow } from "@coreui/react";
import { Field, Formik } from "formik";
import React, { useState } from "react";
import { Card } from "reactstrap";
import AppDatePicker from "src/views/components/AppDatePicker";
import AppSelectGroups from "src/views/components/AppSelectGroups";
import AppSelectHuyen from "src/views/components/AppSelectHuyen";
import AppSelectMonth from "src/views/components/AppSelectMonth";
import AppSelectTinh from "src/views/components/AppSelectTinh";
import AppSelectTypePoint from "src/views/components/AppSelectTypePoint";
import AppSelectTypeReport from "src/views/components/AppSelectTypeReport";
import AppSelectXa from "src/views/components/AppSelectXa";
import InputMaskField from "src/views/components/InputMaskField";
import Barchart from "./Barchart";
const FormSearch = () => {
    const [tinh, setTinh] = useState({});
    const [huyen, setHuyen] = useState({});

    return (
        <Card>
            <Formik
                initialValues={{
                    year: 2020,
                }}
                onSubmit={() => { }}
            >
                {({ values }) => (
                    <CRow style={{ padding: 10 }}>
                        <CCol lg={3}>
                            <Field component={AppSelectTinh} name="idTinh" functionProps={setTinh} title="Tỉnh/thành phố" />
                        </CCol>
                        <CCol lg={3}>
                            <Field component={AppSelectHuyen} name="idTinh" title="Tỉnh/thành phố" functionProps={setHuyen} idTinh={tinh?.id} />
                        </CCol>
                        <CCol lg={3}>
                            <Field component={AppSelectXa} name="idTinh" title="Tỉnh/thành phố" idHuyen={huyen?.id} />
                        </CCol>
                        <CCol lg={3}>
                            <Field component={AppSelectGroups} name="idGroup" title="nhóm người dùng" />
                        </CCol>
                        <CCol lg={3}>
                            <Field component={AppSelectTypeReport} name="typeReport" title="Loại báo cáo" />
                        </CCol>
                        <CCol lg={3}>
                            <Field component={AppDatePicker} name="dateForm" title="Từ ngày" />
                        </CCol>
                        <CCol lg={3}>
                            <Field component={AppDatePicker} name="dateTo" title="Đến" />
                        </CCol>
                    </CRow>
                )}
            </Formik>
            <Barchart />
        </Card>
    )
}
export default FormSearch;