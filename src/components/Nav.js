import React from "react";
import "../styles/nav.css";
import {AvatarMenu, Avatar, MenuDivider, MenuItem, FontAwesomeIcon} from "react-rainbow-components";
import {Link} from 'react-router-dom'
import logo from '../images/logo.png';
import axios from 'axios'

class Nav extends React.Component {

	componentWillMount(){
		let token = localStorage.getItem('token')
		axios.get(`${process.env.REACT_APP_API}/profile`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		}).then(res => {
			let user = this.state.user
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



	}

	state = {
		user:{
			score: 0
		},
			topic: [],
			opinions: [ {
					upvoters: [],
					point: 0,
					user: {
						avatar: '',
							username: ""
					},
					text: "",
					side: ""
			}],
			proOpinions: [ {

					upvoters: [],
					user: {
						avatar: "",
							username: ""
					},
					text: "",
					side: ""
			}],
			conOpinions: []
	}

	logOut = () => {
		localStorage.removeItem('token')
	}

  render() {

		const styles = {
			nav: {
				backgroundColor: '#EDE7F6'
			},
			title: {
				fontFamily: "'Roboto Mono', monospace",
				fontWeight: 'bold',
				fontSize: '25px',
				marginTop: '12px',
			},
			userInfo:{
				fontFamily: "'Roboto Mono', monospace"
			},
			rankings:{
				marginRight: '15px'
			},
			userInfoBox:{
				marginTop: '7px',
				marginLeft: '5px'
			},
			avatar:{
				marginTop: '7px'
			},
			login:{
				textAlign: 'right'
			}
		}

    return (
      <nav style={styles.nav}>
        <Link to="/posttopic" className="logo" style={{backgroundImage: `url(${"./109526.svg"})`}}></Link>
        <div style={styles.userInfoBox}>
          <div style={styles.userInfo}>{this.state.user.username}</div>
          <div style={styles.userInfo}>rank #{this.state.user.ranking}</div>
					<div style={styles.userInfo}>{this.state.user.rank}</div>
        </div>
        <Link to="/"><p style={styles.title}>We Debate</p></Link>

        <div className="profile">

            <AvatarMenu
              id="avatar-menu"
              src={this.state.user.avatar}
              assistiveText="Tahimi Leon"
              menuAlignment="right"
              menuSize="small"
              avatarSize="medium"
              title="Tahimi Leon"
							style={styles.avatar}
            >
              <li className="rainbow-p-horizontal_small rainbow-align_center rainbow-flex">
                <Avatar
                  src={this.state.user.avatar}
                  assistiveText="Tahimi Leon"
                  title="Tahimi Leon"
                  size="large"
                />
                <div className="rainbow-m-left_x-small">
                  <p className="rainbow-font-size-text_medium rainbow-color_dark-1">
                    {this.state.user.username}
                  </p>
                  <p className="rainbow-font-size-text_small rainbow-color_gray-3">
                    {this.state.user.email}
                  </p>
                </div>
              </li>
              <MenuDivider variant="space" />
							<Link to="/profile">
              <MenuItem
                label="Edit Profile"
                icon=<i className="fas fa-pencil-alt"></i>
                iconPosition="left"
              />
							</Link>
							<Link to="/login">
              <MenuItem
                label="Logout"
                icon=<i className="fas fa-power-off"></i>
                iconPosition="left"
								onClick={this.logOut}
              />
							</Link>
            </AvatarMenu>
            <Link to="/ranking" style={styles.rankings}>Rankings</Link>

        </div>

					<Link to="/login">Login</Link>
					<Link to="/signup">Sign-up</Link>

      </nav>
    );
  }
}

export default Nav;
