import React from 'react';

const Header = () => {
  
  let profileImage = process.env.PUBLIC_URL + '/assets/images/profile.svg';

  return (
    <div className="border-b border-gray-200 py-6 px-32 capitalize flex justify-between items-center">
      <a href="/" className="font-semibold text-2xl">mazaryn social</a>
      <h4 className="font-semibold text-lg">Home</h4>
      <div className="flex justify-between items-center">
        <img src={profileImage} alt="profile-img" />
        <h5 className="pl-8">Teddy</h5>
      </div>
    </div>
  )
}

export default Header;