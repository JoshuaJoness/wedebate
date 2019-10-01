import React from 'react'
import {ActivityTimeline, TimelineMarker, UserSignUpIcon, UserVerifiedIcon, UserFirstPostIcon, Card} from "react-rainbow-components";

const iconStyles = { width: 32, height: 32 }

class OpinionBox extends React.Component {

	state = {
		opinions: this.props.opinions
	}
	render() {
		return (
			<div className="rainbow-m-around_xx-large">
					<ActivityTimeline>
							<TimelineMarker
									label={this.props.user.username}
									// icon={<UserSignUpIcon  style={iconStyles} />}
									datetime="Yesterday"
									description={console.log('>>>>>>>>>>>>>>',this.state.opinions)}
							/>
							<TimelineMarker
									label="User phone verified."
									// icon={<UserVerifiedIcon  style={iconStyles} />}
									datetime="Today"
									description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
							/>
							<TimelineMarker
									label="User first post."
									// icon={<UserFirstPostIcon  style={iconStyles} />}
									datetime="3 hours ago"
									description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.">
									<Card title="Inside Content">
											<img
													src="images/illustrations/Illustration-chef.svg"
													className="rainbow-m_auto rainbow-align-content_center"
													alt="landscape with rainbows, birds and colorful balloons" />
									</Card>
							</TimelineMarker>
					</ActivityTimeline>
			</div>
		)
	}
}


export default OpinionBox;
