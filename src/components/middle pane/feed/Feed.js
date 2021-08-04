import React , { useContext, useEffect } from 'react'
import './Feed.css'
import { FeedContext } from '../../context/FeedContext';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Feed(){

    const [groups, setGroups] = useContext(FeedContext);

    useEffect(() => {
        axios.get('http://localhost:8000/groups/')
        .then( res => {
          setGroups(res.data)
          //console.log(groups[groups.length-1].members)
        });
    }, []);
    
  

    return(
        <div>
            {
                groups.map( group => 
                    <div className='group' key={group.id}>
                        <img src={group.profileImage} alt='img'/>
                        <Link to='/group' className='link'>
                            <div className='groupName'>{group.group_name}</div>
                            <div className='incomingText'>{'hey'}</div>      
                        </Link>
                    </div>
                )
            }
        </div>
    );
}

export default Feed;