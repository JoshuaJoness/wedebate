import React from "react";
import "../styles/nav.css";
import {AvatarMenu, Avatar, MenuDivider, MenuItem, FontAwesomeIcon} from "react-rainbow-components";
import {Link} from 'react-router-dom'
import logo from '../images/logo.png';
import axios from 'axios'

class Nav extends React.Component {

	componentWillMount(){
		let token = localStorage.getItem('token')

		axios.get('http://localhost:4000/profile', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		}).then(res => {
			let user = this.state.user
			user = res.data
			axios.get(`http://localhost:4000/rankings?user=${user._id}`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			}).then(res => {
				console.log('wwwwwww', res)
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
    return (
      <nav>
        <Link to="/posttopic" className="logo" style={{backgroundImage: `url(${"./109526.svg"})`}}></Link>
        <div>
          <div>{this.state.user.score}</div>
          <div>rank #{this.state.user.ranking}</div>
					<div>{this.state.user.rank}</div>
        </div>
        <Link to="/" className="logoImage"  />

        <div className="profile">

            <AvatarMenu
              id="avatar-menu"
              src={this.state.user.avatar}
              assistiveText="Tahimi Leon"
              menuAlignment="right"
              menuSize="small"
              avatarSize="small"
              title="Tahimi Leon"
            >
              <li className="rainbow-p-horizontal_small rainbow-align_center rainbow-flex">
                <Avatar
                  src="images/ user/user2.jpg"
                  assistiveText="Tahimi Leon"
                  title="Tahimi Leon"
                  size="large"
                />
                <div className="rainbow-m-left_x-small">
                  <p className="rainbow-font-size-text_medium rainbow-color_dark-1">
                    Tahimi
                  </p>
                  <p className="rainbow-font-size-text_small rainbow-color_gray-3">
                    janedoe@gmail.com
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
							<Link to="/">
              <MenuItem
                label="Logout"
                icon=<i className="fas fa-power-off"></i>
                iconPosition="left"
								onClick={this.logOut}
              />
							</Link>
            </AvatarMenu>

            <span>{this.state.user.username}</span>

        </div>
      </nav>
    );
  }
}

export default Nav;
