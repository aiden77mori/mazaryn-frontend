import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SubjectIcon from '@material-ui/icons/Subject';
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
            {/* Dynamically set the profile image*/}
            <figure>
                <img src={process.env.PUBLIC_URL + '/assets/images/me.jpg'} alt='profileImage'/>
                <figcaption>
                    {props.userName}
                </figcaption>    
            </figure>
            <p>{props.text}</p>
            <div className='icons'>
                <FavoriteBorderIcon />
                <SubjectIcon />
            </div>
        </div>
    );
}

export default Posts;