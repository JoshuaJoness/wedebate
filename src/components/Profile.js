import React from "react";
import LineChart from "./LineChart";
import ActivityCard from "./ActivityCard";
import {Avatar} from "react-rainbow-components";
import "../styles/profile.css";
import axios from 'axios'

class Profile extends React.Component {

	state = {
		user:{
			username:'',
			email:'',
			password:'',
			avatar:''
		}
	}

	componentWillMount(){
		let token = localStorage.getItem('token')

		axios.get('http://localhost:4000/profile', {
		  headers: {
		    Authorization: `Bearer ${token}`
		  }
		}).then(res => {
			console.log(res.data);
		}).catch(err => {
			console.log(err);
		})
	}


  render() {
    return (
      <div>
        <h1>Profile</h1>

        <div className="profileWrap">
          <div>
            <div className="rainbow-m-horizontal_medium">
              <Avatar
                src="images/user/user1.jpg"
                assistiveText="Jose Leandro"
                title="Jose Leandro"
                size="large"
              />
              <div className="headerName">
                <p>Name</p>
                <p>Since 3 months ago</p>
              </div>
            </div>
          </div>

          <div className="headerPoints">
            <p>Points: 678</p>
            <p>Rank: Sophist</p>
          </div>
        </div>

        <div
          style={{border: " black solid 1px", width: "600px", margin: "60px"}}
        >
          <LineChart />
        </div>

        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
          <div style={{border: " black solid 1px", width: "500px"}}>
            <ActivityCard />
          </div>
          <div style={{border: " black solid 1px", width: "500px"}}>
            <ActivityCard />
          </div>
        </div>
      </div>
    )
  }
}


export default Profile;
