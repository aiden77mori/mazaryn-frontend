import React , { useContext } from 'react'
import './Feed.css'
import { FeedContext } from '../../context/FeedContext';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Feed(){

    const [groups, setGroups] = useContext(FeedContext);

    axios.get('http://localhost:8000/groups/groups/')
    .then( res => {
      console.log(res.data)
      setGroups(res.data)
    });
  

    return(
        <div>
            {
                groups.map( group => 
                    <div className='group' key={group.id}>
                        <img src={group.profileImage} alt='groupImage'/>
                        <Link to='/group' className='link'>
                            <div>
                                <div className='groupName'>{group.name}</div>
                                <div className='incomingText'>{group.newText}</div>      
                            </div>
                        </Link>
                    </div>
                )
            }
        </div>
    );
}

export default Feed;