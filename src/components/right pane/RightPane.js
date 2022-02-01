//import './RightPane.css';
import React from 'react';
import Search from './search/Search.js';

const RightPane = () => {

  return(
    <div className=' pt-9 w-1/4 h-screen flex flex-col items-center  sticky top-0'>
        <Search />
    </div>
);
}

export default RightPane;
