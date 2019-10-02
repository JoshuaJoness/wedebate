
import React from 'react'
import '../styles/topic.css'
import Opinion from './Opinion'
import axios from 'axios'
import Nav from './Nav'
import { ProgressBar } from 'react-rainbow-components'

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
			topic: [],
			opinions: [ {

					upvoters: [],
					user: {
						avatar: '',
							username: ""
					},
					text: "",
					side: ""
			}],
			proOpinons: [],
			conOpinions: []
	}

	componentDidMount() {

Promise.all([
	axios.get(`http://localhost:4000/topic/${this.props.match.params.id}`),
	axios.get(`http://localhost:4000/opinions/topic/${this.props.match.params.id}`)

]).then(([topic, opinions]) => {

				this.setState({
					topic: topic.data,
					opinions: opinions.data,
					proOpinions: opinions.data.filter((opinion) => opinion.side === 'pro'),
					conOpinions: opinions.data.filter((opinion) => opinion.side === 'con')

				})
				console.log(this.state.proOpinions)
			})
		}

	render() {
		return(
			<>
				<Nav user={this.state.user} points={this.state.points}/>
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
					{

						this.state.opinions.map((opinion,index) => {
							return <Opinion key={index} opinion={opinion}  />
						})
					}


				</div>



					<div className="column" className="right">

						<p>Cons</p>
						{

							this.state.opinions.map((opinion,index) => {
								return <Opinion key={index} opinion={opinion}  />
							})
						}

					</div>
				</div>
			</>
		)
	}
}

export default Topic
