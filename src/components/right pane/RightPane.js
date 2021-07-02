import './RightPane.css';
import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function RightPane({logout}){
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
                    <li onClick={logout}>
                        <ExitToAppIcon/>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default RightPane;
