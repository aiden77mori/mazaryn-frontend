import React from 'react';
import './PostCard.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function PostCard() {
  return (
    <Popup trigger={<button></button>}>
      <p>Pop up</p>
    </Popup>
  )
}

export default PostCard;