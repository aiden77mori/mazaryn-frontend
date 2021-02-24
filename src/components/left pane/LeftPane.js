import './LeftPane.css';
import React from 'react';
import Notifications from './notifications/Notifications'
import FriendRequests from './friend requests/FriendRequests';

function LeftPane(){
    return(
        <div className='leftPane'>
            <Notifications />
            <FriendRequests />
        </div>
    );
}

export default LeftPane;