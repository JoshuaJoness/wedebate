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
      <div className="cardWrap" href="place.html">
			<div
				className="imageHome"
				style={{
					backgroundImage: `url(${this.props.topic.image})`
				}}
			></div>
        <div className="titleHome">
          <h1 className="meta">
            {this.props.topic.title}
          </h1>
					</div>
          <small className="location">
					<div className='yesno'>
															<Circle topic={this.props.topic}/>
					</div>
          </small >
          <div> > holaaa</div>
                       <span className="date"> 2 days ago</span>
        </div>

    );
  }
 }
export default Thumb
