import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from './actions';

import PostForm from './PostForm';
import CommentList from './CommentList';


/** Displays information about a post and provides a way to edit and delete it
 * 
 * State:
 *    editMode -> toggles the display of the PostForm component
 * 
 * Redux:
 *    posts -> main posts object
 * 
 * Dispatch:
 *    deletePost
*/

function PostPage() {

  const dispatch = useDispatch();
  const { id } = useParams();
  const posts = useSelector(st => st);
  const [editMode, setEditMode] = useState(false);

  // redirect to home if post not found
  const post = posts[id];
  if (!post) { return <Redirect to="/" />; }

  const { title, description, body, comments } = post;

  const postBody = editMode 
    ? <PostForm 
        id={id} 
        formData={post} 
        toggleEditMode={toggleEditMode} 
      /> 
    : (<div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{body}</p>
      </div>);

  function toggleEditMode() {
    setEditMode(edit => !edit);
  }

  return (
    <div className="PostPage">
      <div>
        <button onClick={toggleEditMode}>Edit</button>
        <button onClick={() => dispatch(deletePost(id))}>Delete</button>
      </div>
      {postBody}
      <hr />
      <CommentList postId={id} comments={comments} />
    </div>
  )
}

export default PostPage;