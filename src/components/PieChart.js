import React from "react";
import axios from 'axios'
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
                    value: 0,
                    color: '#1abc9c',
                },
                {
                    value: 0,
                    color: '#3498db',
                },
                {
                    value: 0,
                    color: '#34495e',
                },
            ],
        };
    }

		componentWillMount() {
			let token = localStorage.getItem('token')
			axios.get(`${process.env.REACT_APP_API}/opinion`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			}).then(res => {
				let dataset = this.state.dataset
				dataset[1].value = res.data.length
				this.setState(dataset)
			}).catch(err => {
				console.log(err);
			})
			axios.get(`${process.env.REACT_APP_API}/topicPie`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			}).then(res => {
				let dataset = this.state.dataset
				dataset[0].value = res.data.length
				this.setState(dataset)
			}).catch(err =>{
				console.log(err);
			})
			axios.get(`${process.env.REACT_APP_API}/commentPie`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			}).then(res => {
				console.log('comments', res.data);
				let dataset = this.state.dataset
				dataset[2].value = res.data.length
				this.setState(dataset)
			})
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
