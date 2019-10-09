import React from 'react'
import { Avatar } from 'react-rainbow-components';
import "../styles/opinion.css";
import { Textarea, ActivityTimeline, TimelineMarker, Card, Button, ButtonIcon } from 'react-rainbow-components'
import Popup from "reactjs-popup";
import axios from 'axios'
import Comment from './Comment'

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
		comments: [],
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
		axios.get(`${process.env.REACT_APP_API}/profile`, {
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
		axios.get(`${process.env.REACT_APP_API}/comment?opinion=${this.props.opinion._id}`).then(res => {
			let comments = this.state.comments
			comments = res.data
			this.setState({comments})
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
		axios.post(`${process.env.REACT_APP_API}/comment`,
			currentComment).then(res => {
		console.log(res.data)
		let comments = this.state.comments
		comments.push(res.data)
		this.setState(comments)
	}).catch(err => {
		console.log(err)
	})
	}

	upVote = () => {
		let upVoter = this.state.upVoter
		axios.post(`${process.env.REACT_APP_API}/upvote/${this.props.opinion._id}`,
		upVoter).then(res => {

			let opinions = this.state.opinions
			opinions = res.data
			console.log('???????????',opinions.text);

			this.setState({opinions})
		}).catch(err =>{
			console.log(err);
		})
	}

	//trying to get upvotes to referesh on submit upvote......above

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
			},
			textarea: {
				width: '90%'
			},
			leaveComment: {
				marginBottom: '20px'
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
	              	<i className="far fa-comments"></i> {this.state.comments.length} Comments
								</div>
								<i className="fas fa-chevron-down" onClick={this.toggleComments}></i>
	            </div>
							<div style={styles.comments} className={this.state.commentsOpen ? 'open' : ''}>
								<ActivityTimeline>

										<div styles={styles.leaveComment}>
											<Textarea
												onChange={this.writeComment}
												id="example-textarea-1"
												label="Leave a comment:"
												rows={4}
												placeholder="Leave a comment below"
												style={styles.textarea}
												className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
											/>
											<Button onClick={this.submitComment}>Submit</Button>
										</div>

										{this.state.comments.map(comment => <Comment comment={comment}/>)}


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
