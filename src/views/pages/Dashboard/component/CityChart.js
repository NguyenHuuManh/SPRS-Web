import { CChartHorizontalBar } from "@coreui/react-chartjs";
import React from 'react';
const CityChart = () => {

    return (
        <>
            <CChartHorizontalBar
                datasets={[
                    {
                        label: [],
                        backgroundColor: ['#FFF', 'red', 'blue',],
                        data: [0, 100, 123],
                    }
                ]}
                labels={["ad", 'ads', 'da']}
                options={{
                    tooltips: {
                        enabled: true
                    }
                }}
                multiple={false}
                disabled

            />
        </>
    )
}

export default CityChart;