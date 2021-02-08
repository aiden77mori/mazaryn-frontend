import React from 'react'
import './FriendRequests.css'
import FriendRequest from './friend request/FriendRequest';

function FriendRequests(){

    let requests = [
        {
            'id': 1,
            'userName': 'Peter',
        },
        {
            'id': 2,
            'userName': 'Shifa'
        },
        {
            'id': 3,
            'userName': 'Arvand'
        }
    ];

    return(
        <div className='friendRequests'>
            <h4>Friend requests</h4>
            {requests.map(request => {
                return(
                <FriendRequest key={request.id.toString()} userName={request.userName}/>
                );
            })}
        </div>
    );
}

export default FriendRequests;