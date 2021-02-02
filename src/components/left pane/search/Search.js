import React from 'react'
import './Search.css'

function Search(){
    return(
        <div className='search'>
            <input className='searchInput' placeholder={'Search user...'}/>
        </div>
    );
}

export default Search;