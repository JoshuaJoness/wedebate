import React from "react";
import "../styles/nav.css";
import {AvatarMenu, Avatar, MenuDivider, MenuItem, FontAwesomeIcon} from "react-rainbow-components";
import {Link} from 'react-router-dom'

class Nav extends React.Component {

	logOut = () => {
		localStorage.removeItem('token')
	}

  render() {
    return (
      <nav>
        <Link to="/posttopic" className="logo" style={{backgroundImage: `url(${"./109526.svg"})`}}></Link>
        <div>
          <div>{this.props.points}</div>
          <div>rank #1</div>
        </div>
        <Link to="/" className="logo" style={{backgroundImage: `url(${"./logo192.png"})`}}></Link>

        <div className="profile">

            <AvatarMenu
              id="avatar-menu"
              src="images/user/user2.jpg"
              assistiveText="Tahimi Leon"
              menuAlignment="right"
              menuSize="small"
              avatarSize="small"
              title="Tahimi Leon"
            >
              <li className="rainbow-p-horizontal_small rainbow-align_center rainbow-flex">
                <Avatar
                  src="images/user/user2.jpg"
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

            <span>{this.props.user.username}</span>

        </div>
      </nav>
    );
  }
}

export default Nav;
