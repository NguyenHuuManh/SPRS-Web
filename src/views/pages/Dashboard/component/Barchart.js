import { CChartBar } from "@coreui/react-chartjs";
import { isEmpty } from "lodash-es";
import React from "react";
const Barchart = (props) => {
    const { data } = props;

    const filterData = (key) => {
        let dataDastet = [];
        data.dataChart.forEach((element) => {
            element.forEach((e) => {
                if (e.key == key) dataDastet.push(e.value);
            })
        });
        return dataDastet;
    }


    const filterLable = (key) => {
        if (key === '1') return "Cứu Trợ"
        if (key === '2') return "Cửa hàng"
        if (key === '3') return "Tổ chức"
        if (key === '4') return "SOS"
    }

    const filterColor = (key) => {
        if (key === '1') return "pink"
        if (key === '2') return "yellow"
        if (key === '3') return "blue"
        if (key === '4') return "red"
    }
    console.log(data.dataChart, "data.dataChart")

    const datasets = isEmpty(data.dataChart) ? [] : data.dataChart[0].map(({ key }) => {
        return {
            label: filterLable(key),
            backgroundColor: filterColor(key),
            data: filterData(key),
        };
    })
    console.log("datasets", datasets);
    return (
        <CChartBar
            datasets={datasets}
            labels={data.lableChart}
            options={{
                tooltips: {
                    enabled: true
                }
            }}
            multiple={false}
        />
    )
}
export default Barchart;