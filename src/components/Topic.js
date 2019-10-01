import React from 'react'
import '../styles/topic.css'
import Comment from './Comment'
import Nav from './Nav'
import { ProgressBar } from 'react-rainbow-components'
import axios from 'axios'

class Topic extends React.Component {

	componentWillMount(){
		let token = localStorage.getItem('token')

		axios.get('http://localhost:4000/profile', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		}).then(res => {
			let user = this.state.user
			user = res.data
			this.setState({user})
		}).catch(err => {
			console.log(err);
		})


		axios.get('http://localhost:4000/ranking', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		}).then(res => {
			let points = this.state.points
			points = res.data.total
			this.setState({points})
		}).catch(err =>{
			console.log(err)
		})
	}

	state = {
		user:{},
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

	render() {
		return(
			<>
				<Nav user={this.state.user} points={this.state.points}/>
				<div className="topic">
					<h1>Title</h1>
					<img src="https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555924300/shape/mentalfloss/185187503.jpg" alt="landscape with rainbows and colorful birds"/>
					<div>Description:</div>
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
