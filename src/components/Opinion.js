import React from 'react'
import { Avatar } from 'react-rainbow-components';
import "../styles/opinion.css";
import { Textarea, ActivityTimeline, TimelineMarker, Card, Button, ButtonIcon } from 'react-rainbow-components'
import Popup from "reactjs-popup";
import axios from 'axios'

const containerStyles = {
    maxWidth: 700,
}

class Opinion extends React.Component {

	state = {

		opinions: [ {

				upvoters: [],
				user: {
					avatar: '',
						username: ''
				},
				text:''
		}],
		currentComment: {
			opinion: this.props.opinion._id,
			user:'',
			text: ''
		},
		upVoter: {
			_id: ''
		},
		commentsOpen: false
  }

	componentWillMount () {
		console.log('>>>>>>>>>>>',this.props);
		let token = localStorage.getItem('token')
		axios.get('http://localhost:4000/profile', {
		headers: {
			Authorization: `Bearer ${token}`
		}
		}). then (res => {
			let currentComment = this.state.currentComment
			currentComment.user = res.data._id
			let upVoter = this.state.upVoter
			upVoter._id = res.data._id
			this.setState({currentComment:currentComment, upVoter:upVoter})
		}).catch(err => {
			console.log(err);
		})
		axios.get(`http://localhost:4000/comment?opinion=${this.props.opinion._id}`).then(res => {
			console.log('comment',res.data);

		}).catch(err => {
			console.log(err)
		})
	}

	writeComment = (e) => {
		console.log('e', e.target.value);
		let currentComment = this.state.currentComment
		currentComment.text = e.target.value
		this.setState({currentComment}, console.log(this.state.currentComment))
	}

	submitComment = () => {
		let currentComment = this.state.currentComment
		axios.post("http://localhost:4000/comment",
			currentComment).then(res => {
		console.log(res.data)
	}).catch(err => {
		console.log(err)
	})
	}


//do I have to pass props from child to parent in order to update opinions.upvoters, since this component is receiveing each opinion as a prop from Topic.js?
	upVote = () => {
		let upVoter = this.state.upVoter
		console.log('userID',upVoter);
		axios.post(`http://localhost:4000/upvote/${this.props.opinion._id}`,
		upVoter).then(res => {
			console.log(res.data);
		}).catch(err =>{
			console.log(err);
		})
	}

	toggleComments = () => {
		let commentsOpen = this.state.commentsOpen
		console.log('commentsOpen',commentsOpen);
		commentsOpen = !commentsOpen
		this.setState({commentsOpen})
	}

	render() {
		const styles = {
			button: {
				minWidth: '130px'
			},
			icon: {
				marginRight: '10px'
			},
			text: {
				fontSize: '16px',
				wordBreak: 'break-word'
			},
			card: {
				marginTop: '20px'
			},
			comments: {
				textAlign: 'left',
				paddingTop: '20px',
				display: 'none'
			}
		}
		return (
			<Card icon={<Avatar
					src={this.props.opinion.user.avatar}
					assistiveText="Tahimi Leon"
					title="Tahimi Leon"
					size="small"
			/>} title={this.props.opinion.user.username}
					style={styles.card}
					actions={<Button variant="neutral" className="rainbow-m-around_medium" style={styles.button} onClick={this.upVote}>
						<i className="fas fa-chevron-up" style={styles.icon}></i>
						{this.props.opinion.upvoters.length} upvotes
					</Button>}
					footer={
						<>
							<div className="rainbow-align-content_space-between">
								<div>
	              	<i className="far fa-comments"></i> 23 Comments
								</div>
								<i className="fas fa-chevron-down" onClick={this.toggleComments}></i>
	            </div>
							<div style={styles.comments} className={this.state.commentsOpen ? 'open' : ''}>
								<ActivityTimeline>
										<TimelineMarker
												label="User Sign Up."

												datetime="Yesterday"
												description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua."
										/>
										<TimelineMarker
												label="User phone verified."

												datetime="Today"
												description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
										/>
										<TimelineMarker
												label="User first post."

												datetime="3 hours ago"
												description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.">
										</TimelineMarker>
								</ActivityTimeline>
							</div>
						</>
					}>

				<div className="rainbow-p-around_large rainbow-flex_column">
					<div style={styles.text}>{this.props.opinion.text}</div>
				</div>

				{
					/*
					<Popup trigger={<i className="far fa-comments"></i>} position="center">
						<Textarea
							id="example-textarea-1"
							label="Please enter your comment below:"
							rows={6}
							placeholder="Your comment..."
							style={containerStyles}
							className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
							onChange={(e)=>this.writeComment(e)}
						/>
						<button onClick={this.submitComment}>Submit!</button>
						<button>Cancel!</button>
					</Popup>
					*/
				}

			</Card>
		)
	}
}

export default Opinion
