import './Notifications.css';
import React from 'react';

function Notifications(){

    let notifications = [
        {
            'name': 'Teddy',
            'text': 'hey there'
        },
        {
            'name': 'Arvand',
            'text': 'Blockchain tech'
        },
        {
            'name': 'Shifa',
            'text': 'flutter all day'
        }
    ];

    return(
        <div className='notifications'>
            <h4>Notifications</h4>
            {notifications.map((notification) => {
                return(
                <div className='notification'>
                    <p>{notification.name}</p>
                    <p>{notification.text}</p>
                    {console.log(notification)}
                </div>
                );
            })}        
        </div>
    );
}

export default Notifications;