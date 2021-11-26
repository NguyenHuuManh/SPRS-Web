import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import { CChartBar } from "@coreui/react-chartjs";
import React, { useEffect, useState } from "react";
import { apiGetReport } from "src/apiFunctions/Dashboard";
const Barchart = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        apiGetReport({}).then((e) => {
            console.log("Report", e)
        });
    }, [])

    return (
        // <CCard>

        <CChartBar
            datasets={[
                {
                    label: 'GitHub Commits',
                    backgroundColor: '#f87979',
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
                }
            ]}
            labels="months"
            options={{
                tooltips: {
                    enabled: true
                }
            }}
        />
        // </CCard>
    )
}
export default Barchart;