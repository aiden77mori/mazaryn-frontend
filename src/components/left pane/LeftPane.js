import './LeftPane.css';
import React from 'react';
import Notifications from './notifications/Notifications'
import FriendRequests from './friend requests/FriendRequests';
import Search from './search/Search';

function LeftPane(){
    return(
        <div className='leftPane'>
            <p>Left pane</p>
            <Search />
            <Notifications />
            <FriendRequests />
        </div>
    );
}

export default LeftPane;