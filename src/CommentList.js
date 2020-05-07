import React from 'react';
import { useDispatch } from 'react-redux';
import { addComment, deleteComment } from './actions';

import CommentForm from './CommentForm';
import Comment from './Comment';
import './CommentList.css'

function CommentList({ postId, comments }) {

  const dispatch = useDispatch();

  function removeComment(commentId) {
    dispatch(deleteComment(postId, commentId));
  }

  function addNewComment(commentId, newComment) {
    dispatch(addComment(postId, commentId, newComment));
  }

  function renderComments() {
    return Object.keys(comments).map(id => {
      const message = comments[id];
      return <Comment message={message} removeComment={removeComment} id={id} key={id} />
    });
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