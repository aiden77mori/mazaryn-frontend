import './LeftPane.css';
import React from 'react';
import Notifications from './notifications/Notifications'

function LeftPane(){
    return(
        <div className='leftPane'>
            <p>Left pane</p>
            <Notifications />
        </div>
    );
}

export default LeftPane;