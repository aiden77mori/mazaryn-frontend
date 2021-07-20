import React, { useState } from 'react';
import './PostCard.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function PostCard() {
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState('Type something...');
  
  function handleChange(e){
    setPost(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    //post data to the backend and close the popup
    //check if the user has typed in something, if not, do not post to the db
    if(post === 'Type something...'){
      console.log('Type before submitting');
      return
    }
    closeModal();
  }

  function closeModal(){
    setOpen(false);
  }
  
  return (
    <div>
      <button type="button" className="postButton" onClick={() => setOpen(o => !o)}>
        Post
      </button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <form className='popupForm' onSubmit={handleSubmit}>
          <textarea onChange={handleChange} value={post}/>
          <div className='popupFormBtns'>
            <a className="close" onClick={closeModal}>&times;</a>
            <input type='submit' value='submit'/>            
          </div>
        </form>
      </Popup>
    </div>
  );
}

export default PostCard;