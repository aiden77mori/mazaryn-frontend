import React from 'react';
import './header.css';

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
          <p className="userName">Teddy</p>
          <img src={profileImage} alt="profileImage" />
        </div>
      </header>
    </div>
  )
}

export default Header;