import { CCard, CCardBody, CCardGroup, CCardHeader, CCol, CRow } from "@coreui/react";
import { CChartBar, CChartPie } from "@coreui/react-chartjs";
import React from "react";
import { Card } from "reactstrap";
import Barchart from "./component/Barchart"
import FormSearch from "./component/FormSearch";
import Piechart from "./component/PieChart";
const Dashboard = () => {
    return (
        <>
            <CRow>
                <CCol lg={6}>
                    <FormSearch />
                    {/* <Barchart /> */}
                </CCol>
                <CCol lg={6} style={{ paddingBottom: 25 }}>
                    <div style={{ backgroundColor: "#FFFF", height: "100%" }}>
                        <Piechart />
                    </div>
                </CCol>
            </CRow>
        </>
    )
}
export default Dashboard;