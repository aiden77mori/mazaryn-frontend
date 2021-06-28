import './RightPane.css';
import React from 'react';

function RightPane(){
    return(
        <div className='rightPane'>
            <button className='postButton'>Post</button>
            <nav>
                <ul>
                    <li>home</li>
                    <li>bell</li>
                    <li>wallet</li>
                    <li>profile</li>
                </ul>
            </nav>
        </div>
    );
}

export default RightPane;
