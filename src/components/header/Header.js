import React from 'react';
import './Header.css'

function Header(props){

    return(
        <div className='header'>
            <h2 className='headerLeft'>Mazaryn Social</h2>
            <h3 className='headerMiddle'>{props.pageTitle}</h3>
            <div className='headerRight'>
                <img src={process.env.PUBLIC_URL + '/images/me.jpg'} alt='profileImage'/>
                <p>{props.userName}</p>
            </div>        
        </div>
    );
}

export default Header;