import React from 'react';
import './header.css';
import { Link } from 'react-router-dom'

const Header = () => {
  
  let profileImage = process.env.PUBLIC_URL + '/assets/images/profile.svg';

  return (
    <div id="header">
      <header>
        <div id="left">
          <p>Mazaryn social</p>
        </div>
        <div id="center">
          <p>Home</p>
        </div>  
        <div id="profile">
          <Link to='/profile' className='link'>
            <p className="userName">Teddy</p>
            <img src={profileImage} alt="profileImage" />
          </Link>
        </div>
      </header>
    </div>
  )
}

export default Header;