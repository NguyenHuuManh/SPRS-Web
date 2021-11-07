import { CCard, CCardBody, CCardHeader, CCol, CNav, CNavItem, CRow, CTabContent, CTabPane } from '@coreui/react';
import React, { useState } from "react";
import OrgTab from './Component/OrgTab';
import UserTab from './Component/UserTab';

const Profile = () => {
    const [tabActive, setTabActive] = useState("UserTab");
    return (
        <CRow>
            <CCol lg={12}>
                <CCard>
                    {/* <CCardHeader> */}
                    <CNav variant="tabs">
                        <CNavItem
                            style={{ cursor: "pointer", padding: 10, border: "solid", borderWidth: 0, borderBottomWidth: tabActive === "UserTab" ? 1 : 0, borderColor: "coral" }}
                            onClick={() => { setTabActive("UserTab") }}>
                            Cá nhân
                        </CNavItem>
                        <CNavItem
                            style={{ cursor: "pointer", padding: 10, border: "solid", borderWidth: 0, borderBottomWidth: tabActive === "OrgTab" ? 1 : 0, borderColor: "coral" }}
                            onClick={() => { setTabActive("OrgTab") }}>
                            Tổ chức
                        </CNavItem>
                    </CNav>
                    {/* </CCardHeader> */}
                    <CCardBody>
                        <CTabContent>
                            <CTabPane active={tabActive === "UserTab"}>
                                <UserTab />
                            </CTabPane>
                            <CTabPane active={tabActive === "OrgTab"}>
                                <OrgTab />
                            </CTabPane>
                        </CTabContent>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow >
    );
}
export default Profile;