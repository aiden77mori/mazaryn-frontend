import React from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';

function Search(){
    return(
        <div className='search'>
            <input className='searchInput' placeholder={''}/>
            <SearchIcon />    
        </div>
    );
}

export default Search;