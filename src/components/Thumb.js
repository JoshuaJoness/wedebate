import React from "react";
import Circle from './Circle'
import "../styles/card.css";


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
      <div className="card link" href="place.html">
			<img
						src={this.props.topic.image}
						alt="landscape with rainbows and colorful birds"
				/>
        <div className="content">
          <h1 className="meta">
            {this.props.topic.title}
          </h1>
          <small className="location">
 <div className='yesno'>
                     <Circle/>
 </div>
          </small >
          <div> > holaaa</div>
                       <span className="date"> 2 days ago</span>
        </div>
      </div>
    );
  }
 }
export default Thumb
