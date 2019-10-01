import React from "react";
import LineChart from "./LineChart";
import ActivityCard from "./ActivityCard";
import {Avatar} from "react-rainbow-components";
import "../styles/profile.css";
import axios from 'axios'

class Profile extends React.Component {

	state = {
		user:{

		},
		ranking:0,
		opinions:{}
	}

	componentWillMount(){
		let token = localStorage.getItem('token')
		axios.get('http://localhost:4000/profile', {
		  headers: {
		    Authorization: `Bearer ${token}`
		  }
		}).then(res => {
			let user = this.state.user
			user = res.data
			this.setState({user})
		}).catch(err => {
			console.log(err);
		})

		axios.get('http://localhost:4000/ranking', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		}).then(res => {
			let ranking = this.state.ranking
			ranking = res.data.total
			this.setState({ranking})
		})

		axios.get('http://localhost:4000/opinion', {
			headers: {
		    Authorization: `Bearer ${token}`
		}
	}).then(res =>{
		console.log('>>>>>>>>>>',res.data);
			let opinions = this.state.opinions
			opinions = res.data
			this.setState({opinions})
		}).catch(err =>{
			console.log(err)
		})
	}

//need to figure out how to get opinions to populate the activityCard, I am getting them from the API, map?

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
                <p>{this.state.user.username}</p>
                <p>Since 3 months ago</p>
              </div>
            </div>
          </div>

          <div className="headerPoints">
            <p>Points: {this.state.ranking}</p>
            <p></p>
          </div>
        </div>

        <div
          style={{border: " black solid 1px", width: "600px", margin: "60px"}}
        >
          <LineChart />
        </div>

        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
          <div style={{border: " black solid 1px", width: "500px"}}>
            <ActivityCard user={this.state.user} opinions={this.state.opinions[0]}/>
          </div>
          <div style={{border: " black solid 1px", width: "500px"}}>
            <ActivityCard user={this.state.user}/>
          </div>
        </div>
      </div>
    )
  }
}


export default Profile;
