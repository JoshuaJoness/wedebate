import React from 'react'
import { Avatar } from 'react-rainbow-components';
import "../styles/opinion.css";

class Opinion extends React.Component {

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

<<<<<<< HEAD

=======
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
>>>>>>> parent of ed692dd... minor updates

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
<<<<<<< HEAD
							<p className="footerItemUpvote"><i className="fas fa-chevron-up"></i></p>
							<p className="footerItemComment"><i className="far fa-comments"></i></p>
						</div>


=======
							<p className="footerItemUpvote" onClick={this.upVote}><i className="fas fa-chevron-up"></i>1</p>
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
>>>>>>> parent of ed692dd... minor updates
			</div>
		)
	}
}

export default Opinion
