import React from 'react'
import '../styles/topic.css'
import Opinion from './Opinion'
import axios from 'axios'
import Nav from './Nav'
import { RadioGroup, Button, Textarea, ProgressBar, ButtonIcon, Card, RadioButtonGroup } from 'react-rainbow-components'



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
		},
		value: 'auto'
		}

	componentWillMount(){
		let token = localStorage.getItem('token')
		axios.get(`${process.env.REACT_APP_API}/profile`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
				}).then(res => {
					let user = this.state.user
					user = res.data
					let currentOpinion = this.state.currentOpinion
					currentOpinion.user = res.data._id
					currentOpinion.topic = this.props.match.params.id
					this.setState({user, currentOpinion}, ()=>console.log('PROPS',this.props.match.params.id))
				}).catch(err => {
					console.log(err);
				})

		axios.get(`${process.env.REACT_APP_API}/ranking`, {
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
			axios.get(`${process.env.REACT_APP_API}/topic/${this.props.match.params.id}`),
			axios.get(`${process.env.REACT_APP_API}/opinions/topic/${this.props.match.params.id}`)
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
		this.setState({ currentOpinion, value:e.target.value });

	}

	submitOpinion = (e) => {
		e.preventDefault()
		let currentOpinion = this.state.currentOpinion
		if(currentOpinion.text && currentOpinion.side) {
			axios.post(`${process.env.REACT_APP_API}/opinion`,
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

	voteYes = () => {
		let user = this.state.user
		user.votedYes = true
		axios.patch(`${process.env.REACT_APP_API}/vote/${this.props.match.params.id}`,
			{user}).then(res => {
				console.log('RESPONSE',res.data);
			}).catch(err => {
				console.log(err);
			})
	}

	voteNo = () => {
		let user = this.state.user
		axios.patch(`${process.env.REACT_APP_API}/vote/${this.props.match.params.id}`,
			{user}).then(res => {
				console.log('RESPONSE',res.data);
			}).catch(err => {
				console.log(err);
			})
	}

	render() {
		const styles = {
			title: {
				fontSize: '44px',
				fontWeight: 'bold',
				padding: '30px'
			},
			descriptionLabel:{
				fontSize: '36px',
				fontWeight: 'bold',
				paddingTop: '40px',
				paddingBottom: '25px'
			},
			description:{
				fontSize: '26px'
			},
			textArea:{
				width:'600px'
			},
			card:{
				width: '700px',
				marginLeft: '27.5%',
				marginTop: '80px'
			},
			radio:{
				color: 'black !important'
			}
		}
		return(
			<>
				<Nav user={this.state.user} points={this.state.points}/>
				<div className="topic">
					<h1 style={styles.title}>{this.state.topic.title}</h1>
					<img className='topicImage' src={this.state.topic.image} alt="landscape with rainbows and colorful birds"/>
					<div style={styles.descriptionLabel}>Description:
				</div>
				<div style={styles.description}>	{this.state.topic.description}</div>
				</div>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<div className="bar">
					<Button className="yesButton" onClick={this.voteYes}>Yes</Button>
						<ProgressBar value={this.state.topic.percentage} size="large" className="barImage"  variant="success"/>
					<Button className="noButton" onClick={this.voteNo}>No</Button>
				</div>
				<br></br>
				<br></br>



				<div className="rainbow-m-around_large" style={styles.card} >
					<Card
						title="Leave an opinion:"
						footer={
			        <div className="rainbow-align-content_space-between">
			          <div className="rainbow-flex">
									<RadioButtonGroup
										label="Please select a side"
										required
										id="radio-button-group-component-1"
										options={options}
										value={this.state.value}
										variant="inverse"
										onChange={this.changeProCon}
										required
										style={styles.radio}
									/>
			          </div>
			          	<Button onClick={this.submitOpinion}> Submit</Button>
			        </div>
			       }
								>
						<div className="rainbow-p-around_xx-large rainbow-align-content_center rainbow-flex_column">
							<Textarea
								id="example-textarea-1"
								label="Please enter your topic below:"
								rows={6}
								placeholder="Your topic..."
								style={styles.textArea}
								className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
								onChange={(e)=>this.writeOpinion(e)}
							/>
						</div>
				</Card>
			</div>



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
