import React, { useState } from 'react';

/** Displays a form to add a new comment to a post
 * 
 * Props:
 *    addComment -> parent function that dispatches addComment action
 * 
 * State:
 *    message -> current input data
 */

function CommentForm({ addComment }) {

  const [message, setMessage ] = useState('')

  const handleChange = evt => {
    setMessage(evt.target.value)
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    addComment(message);
    setMessage('');
  }

  return (
    <form onSubmit={handleSubmit} >
      <input
        name="newMessage"
        placeholder="New message"
        value={message}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  )
}

export default CommentForm;