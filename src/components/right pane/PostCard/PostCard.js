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
        <a className="close" onClick={closeModal}>&times;</a>
        <form className='popupForm' onSubmit={handleSubmit}>
          <textarea onChange={handleChange} value={post}/>
          <input type='submit' value='submit'/>
        </form>
      </Popup>
    </div>
  );
}

export default PostCard;