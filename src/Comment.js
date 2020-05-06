import React from 'react';
import './Comment.css';

function Comment({ message, removeComment, id }) {

  return (
    <div className="comment">
      <i className="fa fa-window-close commentDelete" onClick={() => removeComment(id)} ></i>{message}
    </div>
  )

}

export default Comment;