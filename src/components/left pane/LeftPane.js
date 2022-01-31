//import './LeftPane.css';
import React from 'react';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css'

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
                <Link to='/' className=' flex flex-row items-center text-black focus:bg-greenborder focus:text-white rounded-bl-full rounded-tl-full h-11 pl-5'>
                  <i class="ri-home-3-line pr-3"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/wallet' className=' flex flex-row items-center text-black focus:bg-greenborder focus:text-white rounded-bl-full rounded-tl-full h-11 pl-5'>
                  <i class="ri-wallet-3-line pr-3"></i>
                  Wallet
                </Link>
              </li>
              <li>
                <Link to='/notifications' className=' flex flex-row items-center text-black focus:bg-greenborder focus:text-white rounded-bl-full rounded-tl-full h-11 pl-5'>
                  <i class="ri-notification-2-line pr-3"></i>
                  Notifications
                </Link>
              </li>
              <li>
                <Link className=' flex flex-row items-center text-black focus:bg-greenborder focus:text-white rounded-bl-full rounded-tl-full h-11 pl-5'>
                  <i className="ri-message-3-line pr-3"></i>
                  Message
                </Link>
              </li>
              {/* 
              <li onClick={logout} className="cursor-pointer flex flex-row">
                <ExitToAppIcon />
                <p>Exit</p>
              </li> 
              */}
            </ul>
          </nav>
        </div>
      );
}

export default LeftPane;