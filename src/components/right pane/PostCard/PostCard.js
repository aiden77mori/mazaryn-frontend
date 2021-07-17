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
        <div className="modal">
          <a className="close" onClick={closeModal}>
            &times;
          </a>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
          omnis delectus nemo, maxime molestiae dolorem numquam mollitia, voluptate
          ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperiam
          doloribus. Odit, aut.
        </div>
      </Popup>
    </div>
  );
}

export default PostCard;