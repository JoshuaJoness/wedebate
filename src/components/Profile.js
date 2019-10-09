import React from "react";
import LineChart from "./LineChart";
import ActivityCard from "./ActivityCard";
import {Avatar} from "react-rainbow-components";
import "../styles/profile.css";
import axios from 'axios'
import OpinionBox from "./OpinionBox"
import CommentBox from "./CommentBox"
import Nav from "./Nav"
import TimeAgo from 'react-timeago'
import moment from 'moment'
import PieChart from "./PieChart"




class Profile extends React.Component {

	state = {
		user:{},
		ranking:0,
		opinions:[],
		comments:[]
	}

	componentWillMount(){
		let token = localStorage.getItem('token')
		axios.get(`${process.env.REACT_APP_API}/profile`, {
		  headers: {
		    Authorization: `Bearer ${token}`
		  }
		}).then(res => {
			let user = this.state.user
			user.created =
			user = res.data
			axios.get(`${process.env.REACT_APP_API}/rankings?user=${user._id}`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			}).then(res => {
				this.setState({user: res.data})
			}).catch(err =>{
				console.log(err)
			})
		}).catch(err => {
			console.log(err);
		})

		axios.get(`${process.env.REACT_APP_API}/opinion`, {
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

		axios.get(`${process.env.REACT_APP_API}/comment`, {
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
		const styles = {
			headerElement: {
				marginTop: '7px',
				fontFamily: "'Roboto Mono', monospace"
			},
			avatar: {
				marginBottom: '100px'
			},
			pie: {
				paddingTop: '20px'
			},
			label: {
				textAlign: 'center',
				fontFamily: "'Roboto Mono', monospace",
				fontWeight: 'bold',
				marginTop: '8px'
			}
		}

    return (
      <div>

				<Nav user={this.state.user} points={this.state.ranking}/>

        <div className="profileWrap">
          <div>
            <div className="rainbow-m-horizontal_medium">
              <Avatar
                src={this.state.user.avatar}
                assistiveText="Jose Leandro"
                title="Jose Leandro"
                size="large"
								style={styles.avatar}
              />
              <div className="headerName">
                <p style={styles.headerElement}>{this.state.user.username}</p>
                <p style={styles.headerElement}>User since: {moment(this.state.user.created).format('D MMMM YYYY')}</p>
								<p style={styles.headerElement}>Points: {this.state.user.ranking}</p>
              </div>
            </div>
          </div>
					<div style={styles.pie}>
						<PieChart user={this.state.user}/>
					</div>
        </div>

        <div className="boxHolder">
					<div></div>
          <div className="box">
					<h1 style={styles.label}>Your Opinions</h1>
            <OpinionBox user={this.state.user} opinions={this.state.opinions}/>
          </div>
          <div className="box">
							<h1 style={styles.label}>Your Comments</h1>
            <CommentBox user={this.state.user} comments={this.state.comments}/>
          </div>
					<div></div>
        </div>

      </div>
    )
  }
}

export default Profile;
