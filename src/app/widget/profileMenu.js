
import React from 'react';
import { Menu, Dropdown } from 'antd';
const ProfileMenu = (props) => {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <div className="profile-block-content">
            <div className="profile-info">
              <div className="porfile-info-user">
                <img src={process.env.PUBLIC_URL + '/images/profile/2.jpg'} alt="user"/>
                <div>
                  <h5>stan lee</h5>
                  <p>lee@domain.com</p>
                </div>
              </div>
              <ul className="user-prop-list">
                <li>
                  <a href="javascript:void(0)">
                    <i className="la la-user"></i>
                    Account
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <i className="la la-gear"></i>
                    Settings
                  </a>
                </li>
                <li>
                    <a href="javascript:void(0)">
                        <i className="la la-power-off"></i>
                        Logout
                    </a>
                </li>
              </ul>
            </div>
          </div>
        </Menu.Item>
      </Menu>
    );
    return(
        <Dropdown overlay={menu} trigger={['click']}>
          <div className="profile-hyper">
            <img src={process.env.PUBLIC_URL + '/images/profile/2.jpg'} alt="user"/>
            <h5>Robert Chavez</h5>
          </div>
        </Dropdown>
    )
}

export default ProfileMenu;