import './RightPane.css';
import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PostCard from './PostCard/PostCard';

const RightPane = (props) => {
    console.log(props)
    const logout = () => {
        localStorage.removeItem("auth_token")
        props.history.push("/login")
    }

    return (
        <div className='rightPane pt-19'>
            <PostCard />
            <nav>
                <ul className="rightPaneUl">
                    <li>
                        <Link to='/'>
                            <HomeIcon />
                        </Link>
                    </li>
                    <li>
                        <Link to='/notifications'>
                            <NotificationsIcon />
                        </Link>
                    </li>
                    <li>
                        <Link to='/wallet'>
                            <AccountBalanceWalletIcon />
                        </Link>
                    </li>
                    <li>
                        <Link to='/profile'>
                            <PersonIcon />
                        </Link>
                    </li>
                    <li onClick={logout} className="cursor-pointer">
                        <ExitToAppIcon />
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default RightPane;
