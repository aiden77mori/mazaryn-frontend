import React from 'react';
import './Post.css'

function Post(props){
    return(
        <div className='post'>
            <h4>{props.userName}</h4>
            <p>{props.text}</p>
        </div>
    );
}

export default Post;