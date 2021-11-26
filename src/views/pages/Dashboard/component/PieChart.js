import { CChartPie } from "@coreui/react-chartjs";
import React, { useState } from "react";
import { apiGetReport } from "src/apiFunctions/Dashboard";
const Piechart = () => {
    const [data, setData] = useState([])
    const getReport = (values) => {
        apiGetReport(values).then((e) => {
            if (e.status == 200) {
                if (e.data.code == '200') {
                    setData(e?.data?.obj || []);
                }
            }

        })
    }
    return (
        <CChartPie
            datasets={[
                {
                    backgroundColor: [
                        '#41B883',
                        '#E46651',
                        '#00D8FF',
                        '#DD1B16'
                    ],
                    data: [40, 20, 80, 10]
                }
            ]}
            labels={['VueJs', 'EmberJs', 'ReactJs', 'AngularJs']}

            options={{
                tooltips: {
                    enabled: true
                }
            }}

        />
    )
}
export default Piechart;