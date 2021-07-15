import React , { useContext } from 'react'
import './Feed.css'
import { FeedContext } from '../../context/FeedContext';
import { Link } from 'react-router-dom';

function Feed(){

    const [groups, setGroups] = useContext(FeedContext);

    return(
        <div>
            {
                groups.map( group => 
                    <div className='group'>
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