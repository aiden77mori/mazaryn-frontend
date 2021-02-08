import React from 'react'
import './Notification.css'

function Notification(props){
    return(
        <div className='notification'>
            <p>{props.name}</p>
            <p>{props.text}</p>
        </div>
    );
}

export default Notification;