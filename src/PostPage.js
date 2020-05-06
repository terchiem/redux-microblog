import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';

import EditPostForm from './EditPostForm';


/** Displays information about a post and provides a way to edit and delete it
 * 
 * Props:
 *    posts -> array of posts from App state
 *    editPost -> state setter from App component
 *    deletePost -> state setter from App component
 * 
 * State:
 *    editMode -> toggles the display of the EditPostForm component
*/

function PostPage({ posts, editPost, deletePost }) {

  const { id } = useParams();
  const [editMode, setEditMode] = useState(false);

  const post = posts.find(p => p.id === id);
  if (!post) return <Redirect to="/" />;

  const { title, description, body } = post;

  const postBody = editMode 
    ? <EditPostForm 
        id={id} 
        postData={post} 
        toggleEditMode={toggleEditMode} 
        editPost={editPost} 
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
        <button onClick={() => deletePost(id)}>Delete</button>
      </div>

      {postBody}

    </div>
  )
}

export default PostPage;