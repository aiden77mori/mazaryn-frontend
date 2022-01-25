import React from 'react';
import './header.css';
import { Link } from 'react-router-dom'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Edit from '@material-ui/icons/Edit'
import { MessageOutlined, Settings } from '@material-ui/icons'

const Header = () => {

  let profileImage = process.env.PUBLIC_URL + '/assets/images/profile.svg';

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Edit className="mr-1" /> Edit Profile
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1" onClick={'/settings'}>
        <Settings className="mr-1" />Settings
      </Menu.Item>
    </Menu>
  );

  return (
    <div id="header">
      <header>
        <div id="left">
          <Link to="/" className="text-black hover:text-black">
            <p className="mb-0">Mazaryn</p>
          </Link>
        </div>
        {/* <div id="center">
          <p>Home</p>
        </div> */}
        <div id="profile">
          <MessageOutlined className="mr-3" />
          <Link to='/notifications' className="mr-4">
            <img src={`${process.env.PUBLIC_URL}/assets/images/notifications_black_24dp.svg`} alt='notification button'/>
          </Link>
          <Link to='/profile' className='link'>
            {/* <p className="userName">Teddy</p> */}
            <img src={profileImage} alt="profileImage" />
          </Link>
          <Dropdown className="ml-2 text-black" placement="bottomCenter" overlay={menu} trigger={['click']} arrow>
            <div onClick={e => e.preventDefault()}>
              <DownOutlined />
            </div>
          </Dropdown>
        </div>
      </header>
    </div >
  )
}

export default Header;