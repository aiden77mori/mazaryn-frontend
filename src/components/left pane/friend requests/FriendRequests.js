import React from 'react'
import './FriendRequests.css'

function FriendRequests(){

    let requests = [
        {
            'userName': 'Peter',
        },
        {
            'userName': 'Shifa'
        },
        {
            'userName': 'Arvand'
        }
    ];

    return(
        <div className='friendRequests'>
            <h4>Friend requests</h4>
            {requests.map(request => {
                return(
                <div className='request'>
                    <p>{request.userName}</p>
                </div>
                );
            })}
        </div>
    );
}

export default FriendRequests;