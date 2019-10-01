import React from 'react'
import axios from 'axios'
import { Chart, Dataset } from 'react-rainbow-components';

class LineChart extends React.Component {
componentWillReceiveProps(props){
	console.log('LineChart', props.points);

}

	render() {
		const containerStyles = {maxWidth: 600}
		return(
			<div className="rainbow-p-vertical_medium rainbow-m_auto" style={containerStyles}>
					<div className="rainbow-align-content_center">
							<Chart
									labels={['A', 'B', 'C', 'D']}
									type="line"
									className="rainbow-m-horizontal_xx-large rainbow-m-top_x-large"
							>

									<Dataset
											title="Total points"
											values={this.props.points}
											backgroundColor="#1de9b6"
											borderColor="#1de9b6"
									/>
							</Chart>
					</div>
			</div>
		)
	}
}

export default LineChart
