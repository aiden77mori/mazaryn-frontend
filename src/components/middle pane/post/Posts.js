import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SubjectIcon from '@material-ui/icons/Subject';
import EditIcon from '@material-ui/icons/Edit';
import './Post.css'

function Posts(){

    let posts = [
        {
            id: 1,
            userName: 'Teddy',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id: 2,
            userName: 'Arvand',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id: 3,
            userName: 'Shifa',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id: 4,
            userName: 'Peter',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
    ];

    return(
        <div className='posts'>
            {
                posts.map( post => {
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