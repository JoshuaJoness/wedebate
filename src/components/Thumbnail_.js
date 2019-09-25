import React from "react";
import Circle from './Circle'
import "../styles/Cards.css";
class Thumbnail_ extends React.Component {
 render() {
   return (
     <div className="card link" href="place.html">
       <div
         className="image"
         style={{
           backgroundImage: url(https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555924300/shape/mentalfloss/185187503.jpg)
         }}
       >
       </div>
       <div className="content">
         <h1 className="meta">
           Should we all be vegan?
         </h1>
         <small className="location">
<div className='yesno'>
                    <Circle/>
</div>
         </small >
         <span className="author"> Created by: John Smith</span>
                      <span className="date"> 2 days ago</span>
       </div>
     </div>
   );
 }
}
export default Thumbnail_
