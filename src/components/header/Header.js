import React from 'react';
import './Header.css'
import Search from '../left pane/search/Search';
import MenuIcon from '@material-ui/icons/Menu';

function Header(props){

    return(
        <div className='header'>
            <h2 className='orgName'>Mazaryn Social</h2>
            <div className='left'>
                <div className='headerProfile'>
                    <img src={process.env.PUBLIC_URL + '/assets/images/me.jpg'} alt='profileImage'/>
                    <p>{props.userName}</p>
                </div>
                <h3 className='pageTitle'>{props.pageTitle}</h3>
            </div>        
            <div className='right'>
                <Search />
                <MenuIcon />
            </div>
        </div>
    );
}

export default Header;