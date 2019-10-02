import React from "react";
import LineChart from "./LineChart";
import ActivityCard from "./ActivityCard";
import {Avatar} from "react-rainbow-components";
import "../styles/profile.css";
import axios from 'axios'
import OpinionBox from "./OpinionBox"
import CommentBox from "./CommentBox"
import Nav from "./Nav"

class Profile extends React.Component {

	state = {
		user:{},
		ranking:0,
		opinions:[],
		comments:[]
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
			console.log('>>>>>>RANK',res.data);
			let ranking = this.state.ranking
			ranking = res.data.total
			this.setState({ranking}, ()=>console.log('>>>>>>>>>>>RANKING',this.state.ranking))
		}).catch(err =>{
			console.log(err)
		})

		axios.get('http://localhost:4000/opinion', {
			headers: {
		    Authorization: `Bearer ${token}`
		}
	}).then(res => {
		console.log('Response on profile page',res.data);
			let opinions = this.state.opinions
			opinions = res.data
			this.setState({opinions}, () => {console.log('ProfilePage',this.state.opinions)})
		}).catch(err =>{
			console.log(err)
		})

		axios.get('http://localhost:4000/comment', {
			headers: {
				Authorization: `Bearer ${token}`
		}
	}).then(res => {
		console.log('Response on profile page',res.data);
			let comments = this.state.comments
			comments = res.data
			this.setState({comments}, () => {console.log('ProfilePageComments',this.state.comments)})
		}).catch(err =>{
			console.log(err)
		})



	}


  render() {
    return (
      <div>

				<Nav user={this.state.user} points={this.state.ranking}/>

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
                <p>User since:{this.state.user.created}</p>
              </div>
            </div>
          </div>

          <div className="headerPoints">
            <p>Points: {this.state.ranking}</p>
            <p></p>
          </div>
        </div>

        <div
          style={{border: "black solid 1px", borderRadius: "5%", width: "600px", marginLeft: "10%", marginBottom: "5%", marginTop:"5%"}}
        >
          <LineChart className="chart" points={this.state.ranking}/>
        </div>

        <div className="boxHolder">
					<div></div>
          <div className="box">
            <OpinionBox user={this.state.user} opinions={this.state.opinions}/>
          </div>
          <div className="box">
            <CommentBox user={this.state.user} comments={this.state.comments}/>
          </div>
					<div></div>
        </div>

      </div>
    )
  }
}


export default Profile;
