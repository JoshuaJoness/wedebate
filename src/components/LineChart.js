import React from 'react'

import { Chart, Dataset } from 'react-rainbow-components';

class LineChart extends React.Component {

	render() {
		const containerStyles = {
	maxWidth: 600,
};


		return(


<div className="rainbow-p-vertical_medium rainbow-m_auto" style={containerStyles}>
    <div className="rainbow-align-content_center">
        <Chart
            labels={['A', 'B', 'C', 'D']}
            type="line"
            className="rainbow-m-horizontal_xx-large rainbow-m-top_x-large"
        >
            <Dataset
                title="Dataset 1"
                values={[23, 45, 123, 56]}
                backgroundColor="#1de9b6"
                borderColor="#1de9b6"
            />
            <Dataset
                title="Dataset 2"
                values={[66, 100, 30, 156]}
                backgroundColor="#01b6f5"
                borderColor="#01b6f5"
            />
        </Chart>
    </div>
</div>
		)
	}
}

export default LineChart
