

import { connect } from 'react-redux';
import { Post } from '../post/Posts';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Notification = (props) => {
    return (
        <>
            <div className='relative'>
                <div className='w-141 mx-auto bg-gradient-to-b from-faintgreen via-faintgreen pt-19 flex flex-row sticky top-0'>
                    <ArrowBackIcon />
                    <div className='flex'>
                        <h3 className='font-bold'>
                            Notification
                        </h3>
                        <div className='rounded-full h-5 w-5 flex items-center justify-center bg-green-400'>
                            2
                        </div>
                    </div>

                </div>
                <div className='pt-10'>
                    {
                        props.posts.data.map( post => {
                            return(
                                <Post key={post.id} userName={post.userName} text={post.text}/>
                            )
                        })
                    }
                </div>
            </div>
        </>

    )
}



const mapStateToProps = (state) => ({
    posts : state.notification
})

export default connect(mapStateToProps, null)(Notification);