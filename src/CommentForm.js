import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function CommentForm({ addComment }) {

  const [message, setMessage ] = useState('')

  const handleChange = evt => {
    setMessage(evt.target.value)
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    const commentId = uuid();
    addComment(commentId, message);
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