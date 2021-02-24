import React from 'react';
import './Post.css'

function Posts(props){
    return(
        <div className='posts'>
            {
                props.postsList.map( post => {
                    return(
                        <Post userName={post.userName} text={post.text}/>
                    )
                })
            }
        </div>
    );
}

function Post(props){
    return(
        <div className='post'>
            <h4>{props.userName}</h4>
            <p>{props.text}</p>
            <div className='icons'>
                
            </div>
        </div>
    );
}

export default Posts;