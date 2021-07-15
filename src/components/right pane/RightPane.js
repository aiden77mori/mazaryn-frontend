import './RightPane.css';
import React from 'react';
import { Link } from 'react-router-dom';
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
                        <Link to='/'>
                            <HomeIcon />
                        </Link>                    
                    </li>
                    <li>
                        <Link>
                            <NotificationsIcon />
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <AccountBalanceWalletIcon />
                        </Link>
                    </li>
                    <li>
                        <Link to='/profile'>
                            <PersonIcon />
                        </Link>
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
