import React from "react";
import {Card, Button, ButtonIcon} from "react-rainbow-components";
import Circle from "./Circle";
import "../styles/profile.css";

class ActivityCard extends React.Component {
  render() {
    return (
      <Card
        className="card link"
        footer={
          <div className="rainbow-align-content_space-between linking">
            View all comments
          </div>
        }
      >
        <h1> Last Comments</h1>
        <div className="comment">
          <label>John Smith - 2 days ago</label>
          <p>
            {" "}
            I think the 2010s suck because people no longer know what empathy
            means, They are lonelier, More depressed, And more isoalted than
            ever before.
          </p>
        </div>
        <div className="comment">
          <label>John Smith - 2 days ago</label>
          <p>
            {" "}
            I think the 2010s suck because people no longer know what empathy
            means, They are lonelier, More depressed, And more isoalted than
            ever before.
          </p>
        </div>
        <div className="comment">
          <label>John Smith - 2 days ago</label>
          <p>
            {" "}
            I think the 2010s suck because people no longer know what empathy
            means, They are lonelier, More depressed, And more isoalted than
            ever before.
          </p>
        </div>
        <div className="comment">
          <label>John Smith - 2 days ago</label>
          <p>
            {" "}
            I think the 2010s suck because people no longer know what empathy
            means, They are lonelier, More depressed, And more isoalted than
            ever before.
          </p>
        </div>
        <div className="comment">
          <label>John Smith - 2 days ago</label>
          <p>
            {" "}
            I think the 2010s suck because people no longer know what empathy
            means, They are lonelier, More depressed, And more isoalted than
            ever before.
          </p>
        </div>
      </Card>
    );
  }
}
export default ActivityCard;
