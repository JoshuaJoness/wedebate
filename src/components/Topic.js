import React from 'react'
import '../styles/topic.css'
import Opinion from './Opinion'
import axios from 'axios'
import Nav from './Nav'
import { ProgressBar } from 'react-rainbow-components'
import Popup from "reactjs-popup";
import { Textarea } from 'react-rainbow-components'
import { RadioGroup } from 'react-rainbow-components'

const containerStyles = {
    maxWidth: 700,
}

const options = [
    { value: 'pro', label: 'Pro' },
    { value: 'con', label: 'Con' },
]

class Topic extends React.Component {
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
		proOpinions: [],
		conOpinions: [],
		currentOpinion:{
			topic:'',
			text:'',
			user:'',
			side:''
		},
		currentComment:{
			topic:'',
			text:'',
			user:''
		}
	}

	componentWillMount(){
		let token = localStorage.getItem('token')

		axios.get('http://localhost:4000/profile', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		}).then(res => {
			let user = this.state.user
			user = res.data
			let currentOpinion = this.state.currentOpinion
			currentOpinion.user = res.data._id
			currentOpinion.topic = this.props.match.params.id
			this.setState({user, currentOpinion}, ()=>console.log('>>>>>>>>>>>>',this.props))
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

	writeOpinion = (e) => {
		console.log('e', e.target.value);
		let currentOpinion = this.state.currentOpinion
		currentOpinion.text = e.target.value
		this.setState({currentOpinion}, () => console.log('STATE',this.state.currentOpinion))
	}

	changeProCon = (e) => {
		let currentOpinion = this.state.currentOpinion
		currentOpinion.side = e.target.value
		this.setState({ currentOpinion });
	}

	submitOpinion = (e) => {
		e.preventDefault()
		let currentOpinion = this.state.currentOpinion
		if(currentOpinion) {
			axios.post('http://localhost:4000/opinion',
			currentOpinion).then(res => {
				if (res.data.side === 'pro') {
					let proOpinions = this.state.proOpinions
					proOpinions.push(res.data)
					this.setState(proOpinions)
				} else if (res.data.side === 'con') {
					let conOpinions = this.state.conOpinions
					conOpinions.push(res.data)
					this.setState(conOpinions)
				}
			}).catch(err =>{
				console.log(err);
			})
		} else {
			console.log('missing data');
		}
	}

	// leaveComment = (e) => {
	// 	e.preventDefault()
	// 	let leaveComment = this.state.leaveComment
	// 	if(leaveComment) {
	// 		axios.post('http://localhost:4000/opinion',
	// 		currentOpinion).then(res => {
	// 			console.log(res.data)
	// 			// this.props.history.push("/")
	// 		}).catch(err =>{
	// 			console.log(err);
	// 		})
	// 	} else {
	// 		console.log('missing data');
	// 	}
	// }

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

					<Popup trigger={<button className="leaveOpinion">Click here to leave your opinion!</button>} 				position="center">
						<Textarea
							id="example-textarea-1"
							label="Please enter your topic below:"
							rows={6}
							placeholder="Your topic..."
							style={containerStyles}
							className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
							onChange={(e)=>this.writeOpinion(e)}
						/>


						<RadioGroup
								id="radio-group-component-1"
								options={options}
								value={this.state.value}
								onChange={this.changeProCon}
								label="Radio Group Label"
						/>

						<button onClick={this.submitOpinion}>Submit!</button>
						<button>Cancel!</button>
					</Popup>

					<br></br>
					<br></br>
					<br></br>
					<br></br>

					<div className="outerWrapper">

					<div className="column" className="left">
						<p className="label">Pros</p>
							{
								this.state.proOpinions.map((opinion,index) => {
									return <Opinion key={index} opinion={opinion}  />
								})
							}
					</div>
					<div className="column" className="right">
						<p className="label">Cons</p>
							{
								this.state.conOpinions.map((opinion,index) => {
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
