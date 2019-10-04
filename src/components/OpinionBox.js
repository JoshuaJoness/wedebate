import React from 'react'
import {ActivityTimeline, TimelineMarker, UserSignUpIcon, UserVerifiedIcon, UserFirstPostIcon, Card} from "react-rainbow-components";
import TimeAgo from 'react-timeago'

const iconStyles = { width: 32, height: 32 }

class OpinionBox extends React.Component {

	componentWillReceiveProps(props){
		console.log('OpinionBox', props.opinions)
		this.setState({
			opinions: props.opinions
		})
	}

	state = {
		opinions: this.props.opinions
	}
	render() {
		return (
			<div className="rainbow-m-around_xx-large">
					<ActivityTimeline>
					{this.state.opinions.map(o => {
						return (<TimelineMarker
							label={this.props.user.username}
							// icon={<UserSignUpIcon  style={iconStyles} />}
							datetime=<TimeAgo date= {o.created}  />
							description={o.text}
					/>)})}

					</ActivityTimeline>
			</div>
		)
	}
}


export default OpinionBox;
