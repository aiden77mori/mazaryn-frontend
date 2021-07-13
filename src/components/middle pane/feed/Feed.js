import React , { useContext } from 'react'
import './Feed.css'
import { FeedContext } from '../../context/FeedContext';

function Feed(){

    const [groups, setGroups] = useContext(FeedContext);

    return(
        <div>
            {
                groups.map( group => 
                    <div className='group'>
                        <img src={group.profileImage} alt='groupImage'/>
                        <div>
                            <div className='groupName'>{group.name}</div>
                            <div className='incomingText'>{group.newText}</div>      
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Feed;