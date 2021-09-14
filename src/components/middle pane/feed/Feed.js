import React , { useContext, useEffect } from 'react'
//import './Feed.css'
import { FeedContext } from '../../context/FeedContext';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Feed(){

    const [groups] = useContext(FeedContext);

    return(
        <div>
            {
                groups.map( group => 
                    <div className='w-cardWidth h-cardHeight flex flex-row px-14 py-5 shadow-light mb-2.5' key={group.id}>
                        <img src={group.profileImage} alt='img' className="h-16 w-16 rounded-full my-auto"/>
                        <Link to='/group' className='flex flex-col text-black my-auto flex-grow text-left pl-6'>
                            <div className='font-bold'>Zaryn</div>
                            <div className='incomingText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis turpis vitae tellus mollis, at vestibulum massa...</div>      
                        </Link>
                    </div>
                )
            }
        </div>
    );
}

export default Feed;