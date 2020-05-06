import React from 'react';

import CommentForm from './CommentForm';
import Comment from './Comment';
import './CommentList.css'

function CommentList({ postId, addComment, deleteComment, comments }) {

  function removeComment(commentId) {
    deleteComment(postId, commentId);
  }

  function addNewComment(newComment) {
    addComment(postId, newComment);
  }

  function renderComments() {
    return comments.map(c => (
      <Comment message={c.message} removeComment={removeComment} id={c.id} key={c.id} />
    ))
  }

  return (
    <div className="postCommentContainer">
      <h4>Comments</h4>
      {renderComments()}
      <CommentForm addComment={addNewComment} />
    </div>
  )
}

export default CommentList;