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
           View all comments OR perhaps infinite scroll for now
         </div>
       }
     >
       <h1> Need to populate topics and get topic title </h1>
       <div className="comment">
         <label>{this.props.user.username} - need to import opinion creation date and then format</label>
         <p>
					 {this.props.opinion}
           
         </p>
       </div>



     </Card>
   );
 }
}
export default ActivityCard;
