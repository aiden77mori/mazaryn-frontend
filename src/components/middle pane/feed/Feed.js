
import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Post } from '../post/Posts'



const Feed = (props) => {


    return(
        <div className="relative">
            <div className='pt-20'>
                {
                    props.posts.data.map((post) => {
                        return (
                            <Link to='/group' className='text-black'>
                                <Post key={post.id} userName={post.userName} text={post.text} />
                            </Link>
                            
                        )
                    })
                }
            </div>
        </div>
    );
}




const mapStateToProps = (state) => ({
    posts : state.posts
})

export default connect(mapStateToProps, null)(Feed);