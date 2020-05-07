import React from 'react';
import { useDispatch } from 'react-redux';
import { createCommentAPI, deleteCommentAPI } from './actions';

import CommentForm from './CommentForm';
import Comment from './Comment';
import './CommentList.css'

/** Displays a list of Comment components from a post's comments object 
 * 
 * Props:
 *    postId -> post id of comment's list
 *    comments -> a post's list of comments collected in an object
 * 
 * Dispatch:
 *    addComment, deleteComment
*/

function CommentList({ postId, comments }) {

  const dispatch = useDispatch();

  function removeComment(commentId) {
    dispatch(deleteCommentAPI(postId, commentId));
  }

  function addNewComment(newComment) {
    dispatch(createCommentAPI(postId, newComment));
  }

  function renderComments() {
    return comments.map(c => (
      <Comment message={c.text} removeComment={removeComment} id={c.id} key={c.id} />
    ));
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