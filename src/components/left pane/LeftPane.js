//import './LeftPane.css';
import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function LeftPane(props){
    const logout = () => {
        localStorage.removeItem("auth_token")
        props.history.push("/login")
      }
    
      return (
        <div className=' pt-19 w-1/4 flex items-center'>
          <nav className=' h-1/2 w-full flex justify-end'>
            <ul className=" h-full w-3/5">
              <li className=''>
                <Link to='/' className=' flex flex-row text-black'>
                  <HomeIcon />
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link to='/wallet' className=' flex flex-row text-black'>
                  <AccountBalanceWalletIcon />
                  <p>Wallet</p>
                </Link>
              </li>
              <li>
                <Link to='/notifications' className=' flex flex-row text-black'>
                  <NotificationsIcon />
                  <p>Notifications</p>
                </Link>
              </li>
              <li onClick={logout} className="cursor-pointer flex flex-row">
                <ExitToAppIcon />
                <p>Exit</p>
              </li>
            </ul>
          </nav>
        </div>
      );
}

export default LeftPane;