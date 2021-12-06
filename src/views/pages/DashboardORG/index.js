import { CCol, CRow } from "@coreui/react";
import React from "react";
import FormSearch from "./component/FormSearch";
import Piechart from "./component/PieChart";
const Dashboard = () => {
    return (
        <>
            <CRow>
                <CCol lg={12}>
                    <FormSearch />
                </CCol>
                {/* <CCol lg={6} style={{ paddingBottom: 25 }}>
                    <div style={{ backgroundColor: "#FFFF", height: "100%" }}>
                        <Piechart />
                    </div>
                </CCol> */}
            </CRow>
        </>
    )
}
export default Dashboard;