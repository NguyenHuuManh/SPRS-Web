import { CChartBar } from "@coreui/react-chartjs";
import { isEmpty } from "lodash-es";
import React from "react";
const Barchart = (props) => {
    const { data } = props;

    const filterData = (key) => {
        return data.dataChart.map((element) => { return element[key] })
    }

    const filterLable = (key) => {
        if (key === 'item1') return "Cứu Trợ"
        if (key === 'item2') return "Cửa hàng"
        if (key === 'item3') return "Tổ chức"
        if (key === 'item4') return "SOS"
    }

    const filterColor = (key) => {
        if (key === 'item1') return "pink"
        if (key === 'item2') return "yellow"
        if (key === 'item3') return "blue"
        if (key === 'item4') return "red"
    }
    const datasets = isEmpty(data.dataChart) ? [] : Object.entries(data.dataChart[0]).map(([key, value]) => {
        return {
            label: filterLable(key),
            backgroundColor: filterColor(key),
            data: filterData(key),
        };
    })
    console.log("datasets", datasets)
    return (
        <CChartBar
            datasets={datasets}
            labels={data?.lableChart}
            options={{
                tooltips: {
                    enabled: true
                }
            }}
        />
    )
}
export default Barchart;