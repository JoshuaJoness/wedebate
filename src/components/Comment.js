import React from 'react'
import { TimelineMarker } from 'react-rainbow-components'
import TimeAgo from 'react-timeago'

class Comment extends React.Component {
	render(){
		return(
			<TimelineMarker
					label={this.props.comment.user.username}
					datetime=<TimeAgo date={this.props.comment.created} />
					description={this.props.comment.text}
			/>
		)
	}
}

export default Comment
