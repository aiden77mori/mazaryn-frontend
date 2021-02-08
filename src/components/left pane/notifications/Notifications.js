import './Notifications.css';
import React from 'react';
import Notification from './notification/Notification';

function Notifications(){

    let notifications = [
        {
            'id': 1,
            'name': 'Teddy',
            'text': 'hey there'
        },
        {
            'id': 2,
            'name': 'Arvand',
            'text': 'Blockchain tech'
        },
        {
            'id': 3,
            'name': 'Shifa',
            'text': 'flutter all day'
        }
    ];

    return(
        <div className='notifications'>
            <h4>Notifications</h4>
            {notifications.map((notification) => {
                return(
                    <Notification key={notification.id.toString()} name={notification.name} text={notification.text}/>
                );
            })}        
        </div>
    );
}

export default Notifications;