import React from 'react'

class Comment extends React.Component {

	state = {

		opinions: [ {

				upvoters: [],
				user: {
					avatar: '',
						username: ""
				},
				text: "",
		}]

  };



	render() {
		return (
			<div className="outerWrap">

				<div className="header">

						<div className="headerItem">Avatar</div>
						<div className="headerItem">{this.props.opinion.user.username}</div>

				</div>



					<div className="text">{this.props.opinion.text}</div>




						<div className="footer">
							<button className="footerItemReport">Report Post</button>
							<div></div>
							<p className="footerItemUpvote"><i className="fas fa-chevron-up"></i></p>
							<p className="footerItemComment"><i className="far fa-comments"></i></p>
						</div>


			</div>
		)
	}
}

export default Comment
