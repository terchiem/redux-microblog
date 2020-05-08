import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getPostAPI, deletePostAPI } from './actions';

import PostForm from './PostForm';
import CommentList from './CommentList';
import Votes from './Votes';


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
  const post = useSelector(st => st.posts[id], shallowEqual);
  // const isLoading = useSelector(st => st.isLoading);
  const [editMode, setEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();


  useEffect(() => {
    if (!post || !post.id) {
      dispatch(getPostAPI(id));
    }else {
      setIsLoading(false);
    }
  }, [post, dispatch, id]);

  if (isLoading) {
    return <div>Loading...</div>
  }

  /*****************************************************************************************
  * 		ASK ABOUT: Async redirect if page not found		
  *****************************************************************************************/
 // if (!post) { return <Redirect to="/" />; }

  const { title, description, body, comments, votes } = post;

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

  async function deletePost(id) {
    dispatch(deletePostAPI(id));
    history.push('/');
  }

  return (
    <div className="PostPage">
      <div>
        <button onClick={toggleEditMode}>Edit</button>
        <button onClick={() => deletePost(parseInt(id))}>Delete</button>
      </div>
      <div><Votes voteCount={votes} postId={id} /></div>
      {postBody}
      <hr />
      <CommentList postId={id} comments={comments} />
    </div>
  )
}

export default PostPage;