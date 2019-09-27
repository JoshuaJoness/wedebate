import React from "react";
import "../styles/nav.css";
import {
  AvatarMenu,
  Avatar,
  MenuDivider,
  MenuItem,
  FontAwesomeIcon
} from "react-rainbow-components";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <a
          href="/posttopic"
          className="logo"
          style={{backgroundImage: `url(${"./109526.svg"})`}}
        ></a>

        <div>
          <div>1000 Points</div>
          <div>rank #1</div>
        </div>

        <a
          href="/index"
          className="logo"
          style={{backgroundImage: `url(${"./logo192.png"})`}}
        ></a>

        <div className="profile">
          <a to="/profile" className="button">
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
              <MenuItem
                label="Edit Profile"
                icon=<i className="fas fa-pencil-alt"></i>
                iconPosition="left"
              />
              <MenuItem
                label="Logout"
                icon=<i className="fas fa-power-off"></i>
                iconPosition="left"
              />
            </AvatarMenu>

            <span>Carl</span>
          </a>
        </div>
      </nav>
    );
  }
}

export default Nav;
