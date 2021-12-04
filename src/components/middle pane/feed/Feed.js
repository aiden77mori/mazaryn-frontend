import React from 'react'
//import './Feed.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Feed(props){

    return(
        <div className="bg-greenBackground w-cardWidth">
            {
                props.posts?.data.map( (post, i) => 
                    <div className='w-cardWidth h-cardHeight bg-white flex flex-row px-14 py-5 mb-2.5' style={{marginTop : i === 0 ? '4rem' : ''}} key={post.id}>
                        <img src={process.env.PUBLIC_URL + '/assets/images/me.jpg'} alt='profileImage' className='w-10 h-10 rounded-full'/>
                        <Link to='/group' className='flex flex-col text-black my-auto flex-grow text-left pl-6'>
                            <div className='font-bold'>{post.userName}</div>
                            <div className='incomingText'>{post.text.substring(0, 138)} ...</div>      
                        </Link>
                    </div>
                )
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    posts : state.posts
})

export default connect(mapStateToProps, null)(Feed);