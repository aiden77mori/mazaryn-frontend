import React from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';

function Search(){
    return(
        <div className=' w-3/4 border-b-2 border-[#C4C4C4] py-2 flex flex-row'>
            <input className=' w-full focus:outline-none' placeholder={'search Mazaryn'}/>
            <div className='magnifying'>
                <SearchIcon />    
            </div>
        </div>
    );
}

export default Search;