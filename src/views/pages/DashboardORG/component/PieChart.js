import { CChartPie } from "@coreui/react-chartjs";
import React from "react";
const Piechart = () => {
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