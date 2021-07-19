import React, { useState } from 'react';
import './PostCard.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function PostCard() {
  const [open, setOpen] = useState(false);
  
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
        <form>
          <textarea />
        </form>
      </Popup>
    </div>
  );
}

export default PostCard;