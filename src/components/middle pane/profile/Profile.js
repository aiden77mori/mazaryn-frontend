import React from 'react';
import './Profile.css';
import EditIcon from '@material-ui/icons/Edit';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import GroupIcon from '@material-ui/icons/Group';

function Profile(){

    return(
        <div className='profile mt-20'>
            <figure>
                <img src={process.env.PUBLIC_URL + '/assets/images/me.jpg'} alt='profileImage'/>
                <figcaption>
                    Teddy Mbugua
                </figcaption>    
            </figure>
            <FooterMenu />
        </div>
    );
}

function FooterMenu(){
    return(
        <div className='footerMenu'>
            <ul>
                <li>
                    <EditIcon />
                </li>
                <li>
                    <GroupIcon />
                </li>
                <li>
                    <ChatBubbleIcon />
                </li>
            </ul>
        </div>
    );
}

export default Profile;