import React from 'react'
import {ActivityTimeline, TimelineMarker, UserSignUpIcon, UserVerifiedIcon, UserFirstPostIcon, Card} from "react-rainbow-components";

const iconStyles = { width: 32, height: 32 }

class CommentBox extends React.Component {

	componentWillReceiveProps(props){
		console.log('CommentBox>>>>>>>>>>>>>', props.comments)
		this.setState({comments: props.comments})
	}

	state = {
		comments: []
	}

	render() {
		return (
			<div className="rainbow-m-around_xx-large">
					<ActivityTimeline>
						{this.state.comments.map(c => {
							return (
								<TimelineMarker
									label={this.props.user.username}
									// icon={<UserSignUpIcon  style={iconStyles} />}
									datetime="Yesterday"
									description={c.text}
								/>)
						})}
					</ActivityTimeline>
			</div>
		)
	}
}


export default CommentBox;
