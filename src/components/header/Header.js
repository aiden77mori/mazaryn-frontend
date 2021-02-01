import React from 'react';
import './Header.css'

function Header(props){

    let userName = 'Teddy';

    return(
        <div className='header'>
            <h2 className='headerLeft'>Mazaryn Social</h2>
            <h2 className='headerMiddle'>{props.pageTitle}</h2>
            <div className='headerRight'>
                <img src={process.env.PUBLIC_URL + '/images/me.jpg'} alt='profileImage'/>
                <p>{userName}</p>
            </div>        
        </div>
    );
}

export default Header;