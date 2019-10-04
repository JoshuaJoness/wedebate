import React from "react";

import { Chart, Dataset } from 'react-rainbow-components';


const containerStyles = {
    maxWidth: 600,
};


class PieChart extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            labels: ['Topics', 'Opinions', 'Comments'],
            dataset: [
                {
                    value: 10,
                    color: '#fe4849',
                },
                {
                    value: 15,
                    color: '#ff6837',
                },
                {
                    value: 33,
                    color: 'blue',
                },
            ],
        };
    }



    renderDataset() {
        let data = [];
        let colors = [];
        const { dataset } = this.state;
        dataset.forEach(d => {
            data.push(d.value);
            colors.push(d.color);
        });

        return <Dataset title="Data" values={data} backgroundColor={colors} />;
    }

    render() {
        const { labels } = this.state;



        return (

                <div
                    style={containerStyles}
                    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-m_auto"
                >
                    <Chart labels={labels} type="pie" legendPosition="right" disableCurves>
                        {this.renderDataset()}
                    </Chart>
                </div>

        );
    }
}

export default PieChart
