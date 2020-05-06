import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PostList from './PostList';
import PostPage from './PostPage';
import NewPostForm from './NewPostForm';

/** Main routes for Microblog App 
 * 
 * Props:
 *  posts -> array of posts from App state
 *  addPost -> App state setter used in NewPostForm
 *  editPost -> App state setter used in PostPage -> EditPostForm
 *  deletePost -> App state setter used in PostPage -> EditPostForm
*/

function Routes({ posts, addPost, editPost, deletePost }) {

  return (
    <Switch>

      <Route exact path="/">
        <PostList posts={posts} />
      </Route>

      <Route exact path="/new">
        <NewPostForm addPost={addPost} />
      </Route>

      <Route path="/:id">
        <PostPage posts={posts} editPost={editPost} deletePost={deletePost} />
      </Route>

      <Redirect to="/" />

    </Switch>
  )
}

export default Routes;