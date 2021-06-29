import './RightPane.css';
import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import PersonIcon from '@material-ui/icons/Person';

function RightPane(){
    return(
        <div className='rightPane'>
            <button className='postButton'>Post</button>
            <nav>
                <ul>
                    <li>
                        <HomeIcon />
                    </li>
                    <li>
                        <NotificationsIcon />
                    </li>
                    <li>
                        <AccountBalanceWalletIcon />
                    </li>
                    <li>
                        <PersonIcon />
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default RightPane;
