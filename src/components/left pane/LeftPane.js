import './LeftPane.css';
import React from 'react';
import Search from './search/Search.js';

function LeftPane(){
    return(
        <div className='leftPane pt-19'>
            <Search />
        </div>
    );
}

export default LeftPane;