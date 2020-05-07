import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getPostAPI, deletePostAPI, startLoad, endLoad } from './actions';

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
  const posts = useSelector(st => st.posts, shallowEqual);
  const isLoading = useSelector(st => st.isLoading);
  const [editMode, setEditMode] = useState(false);


  useEffect(() => {
    dispatch(startLoad());
    dispatch(getPostAPI(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (posts[id]) {
      dispatch(endLoad());
    }
  }, [posts])

  if (isLoading) {
    return <div>Loading...</div>
  }

  /*****************************************************************************************
  * 		TODO: Think about loading and redirecting when visiting a post			
  *****************************************************************************************/

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
        <button onClick={() => dispatch(deletePostAPI(id))}>Delete</button>
      </div>
      {postBody}
      <hr />
      <CommentList postId={id} comments={comments} />
    </div>
  )
}

export default PostPage;