import React from "react";
import Circle from './Circle'
import "../styles/card.css";
import TimeAgo from 'react-timeago'


class Thumb extends React.Component {

	state = {
    topics: [
			{image: ''}
		],
		categories: [],
		users: []



  };

	render() {
    return (
      <div className="cardWrap" href="place.html">
			<div
				className="imageHome"
				style={{
					backgroundImage: `url(${this.props.topic.image})`
				}}
			></div>
        <div className="titleHome">
          <h1 className={this.props.topic.title.length > 20 ? 'fitting' : 'meta'} >
            {this.props.topic.title}
          </h1>
					</div>

					<div className='yesno'>
															<Circle topic={this.props.topic}/>
					</div>
<div className='wrapCreation'>
					<span className="author"> Created by: {this.props.topic.user.username}</span>
					 <small className="creationDate"><TimeAgo date= {this.props.topic.created}  /></small>
					 </div>
<footer className='footer'><i class="far fa-flag"></i><i class="fas fa-share-alt"></i><i class="fas fa-sort-down"></i>
					 </footer>
					 </div>

    );
  }
 }
export default Thumb
