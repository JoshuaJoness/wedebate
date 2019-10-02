import React from 'react'
import { Avatar } from 'react-rainbow-components';
import "../styles/opinion.css";
import { Textarea } from 'react-rainbow-components'
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
			topic:this.props.opinion._id,
			user:'',
			text: ''
		}
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
			this.setState({currentComment})
		}).catch(err => {
			console.log(err);
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

	render() {
		return (
			<div className="outerWrap">
				<div className="header">
					<div className="rainbow-m-horizontal_medium">
					 <Avatar
							 src={this.props.opinion.user.avatar}
							 assistiveText="Tahimi Leon"
							 title="Tahimi Leon"
							 size="small"
					 />
					 </div>
					 <div className="headerItem">{this.props.opinion.user.username}</div>
				</div>
					<div className="text">{this.props.opinion.text}</div>
						<div className="footer">
							<button className="footerItemReport">Report Post</button>
							<div></div>
							<p className="footerItemUpvote"><i className="fas fa-chevron-up"></i></p>
							<p className="footerItemComment">
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
							</p>
					</div>
			</div>
		)
	}
}

export default Opinion
