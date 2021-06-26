import React from 'react';
import './header.css';

const Header = () => {
  
  let profileImage = process.env.PUBLIC_URL + '/assets/images/profile.svg';

  return (
    <div id="header">
      <div id="left">
        <a href="/">Mazaryn social</a>
      </div>
      <div id="center">
        <p>Home</p>
      </div>
      <div id="profile">
        <p className="userName">Teddy</p>
        <img src={profileImage} alt="profileImage" />
      </div>
    </div>
  )
}

export default Header;