import React from 'react';
import './Comment.css';

/** Displays a comment with a button to remove itself from its parent
 * post object
 * 
 * Props:
 *    id, message -> info about the comment
 *    removeComment -> parent function that dispatches the removeComment action
 */

function Comment({ message, removeComment, id }) {

  return (
    <div className="comment">
      <i className="fa fa-window-close commentDelete" onClick={() => removeComment(id)} ></i>{message}
    </div>
  )

}

export default Comment;