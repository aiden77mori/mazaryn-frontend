import React from 'react';
import './FriendRequest.css'

function FriendRequest(props){
    return(
        <div className='request'>
            <p>{props.userName}</p>
        </div>
    );
}

export default FriendRequest;