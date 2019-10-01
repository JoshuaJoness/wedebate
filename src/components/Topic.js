
import React from 'react'
import '../styles/topic.css'
import Comment from './Comment'
import axios from 'axios'
import Nav from './Nav'
import { ProgressBar } from 'react-rainbow-components'

class Topic extends React.Component {


	state = {
		topic: [],
		opinions: [ {

        upvoters: [],
        user: {
					avatar: '',
            username: ""
        },
        text: "",
    }],
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
	axios.get(`http://localhost:4000/opinions/topic/${this.props.match.params.id}`)

]).then(([topic, opinions]) => {
					console.log(opinions)
				this.setState({
					topic: topic.data,
					opinions: opinions.data

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

						<ProgressBar value={this.state.topic.percentage} size="large" className="barImage"  variant="success"/>

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
					{this.state.opinions.map(p => <Comment />)}

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
