
import React from 'react'
import '../styles/topic.css'
import Comment from './Comment'
import axios from 'axios'
import Nav from './Nav'
import { ProgressBar } from 'react-rainbow-components'

class Topic extends React.Component {


	state = {
		topic: [],
		opinion: [],
		pros:
		[
			{item1: 'yo'},
			{item2:'hola'}
		],
		cons:
		[
			{
				con1:'grrrr'
			}
		]
	}

	componentDidMount() {

Promise.all([
	axios.get(`http://localhost:4000/topic/${this.props.match.params.id}`),
	axios.get(`http://localhost:4000/getOpinionsTopic/${this.props.match.params.id}`)

]).then(([topic, opinion]) => {
				this.setState({
					topic: topic.data,
					opinion: opinion.data
				})
			})
		}






	render() {
		return(
			<>
				<Nav/>
				<div className="topic">
					<h1>{this.state.topic.title}</h1>
					<img src={this.state.topic.image} alt="landscape with rainbows and colorful birds"/>
					<div>Description:</div>
				<div>	{this.state.topic.description}</div>
				</div>
				<br></br>
				<br></br>
				<br></br>
				<br></br>

				<div className="bar">
					<button className="yesButton">Yes</button>

						<ProgressBar value={10} size="large" className="barImage"/>

					<button className="noButton">No</button>
				</div>
				<br></br>
				<br></br>
				<button className="leaveOpinion">Click here to leave an opinion!</button>
				<br></br>
				<br></br>
				<br></br>
				<br></br>

				<div className="outerWrapper">

				<div className="column" className="left">

					<p>Pros</p>
					{this.state.pros.map(p => <Comment />)}

				</div>




					<div className="column" className="right">

						<p>Cons</p>
										{this.state.cons.map(p => <Comment />)}


					</div>
				</div>
			</>
		)
	}
}

export default Topic
