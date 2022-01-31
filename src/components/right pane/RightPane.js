//import './RightPane.css';
import React from 'react';
import Search from './search/Search.js';

const RightPane = () => {

  return(
    <div className=' pt-19 w-1/4 flex flex-col items-center'>
        <Search />
    </div>
);
}

export default RightPane;
