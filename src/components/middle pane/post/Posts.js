import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SubjectIcon from '@material-ui/icons/Subject';
import EditIcon from '@material-ui/icons/Edit';
import './Post.css'

function Posts(props){
    return(
        <div className='posts'>
            {
                props.postsList.map( post => {
                    return(
                        <Post key={post.id} userName={post.userName} text={post.text}/>
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
            <section className='top'>
                <figure>
                    <img src={process.env.PUBLIC_URL + '/assets/images/me.jpg'} alt='profileImage'/>
                    <figcaption>
                        {props.userName}
                    </figcaption>    
                </figure>
                <EditIcon />
            </section>
            <section className='content'>
                <p>{props.text}</p>
            </section>
            <section className='bottom'>
                <div className='icons'>
                    <FavoriteBorderIcon />
                    <SubjectIcon />
                </div>
            </section>
        </div>
    );
}

export default Posts;