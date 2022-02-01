
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { Post } from '../post/Posts'
import { makePost } from '../../../redux/actions/content';



const Feed = (props) => {

    const [post, setPost] = useState({
        content: '',
        image: null
    });

    const handleChange = e => {
        setPost({
            content: e.target.value
        })
    }

    const selectedFileHandler = e => {
        setPost({
            image: e.target.files[0]
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(makePost(post))
    }, [])

    return(
        <div className="relative">
            <div className=' text-left w-141 mx-auto mt-8 sticky top-0 bg-white z-10 pb-4 border-b-1 border-greenborder'>
                <h2 className=' font-bold'>Mazaryn</h2>
                <form className=' flex flex-row' onSubmit={handleSubmit}>
                    <input type="text" name="content" placeholder='type something...' className=" flex-auto focus:outline-none" onChange={handleChange} value={post.content}/>
                    <div className=" flex items-center ml-5">
                        <label for="image"><i class="ri-image-line ri-xl"></i></label>
                        <input id="image" name="image" type="file" className=' hidden' onChange={selectedFileHandler}/>
                    </div>
                    <input type="submit" className=' h-10 w-24 rounded-full text-white bg-greenborder ml-5 font-bold' value="Post"/>
                </form>
            </div>
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