import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PostList from './PostList';
import PostPage from './PostPage';
import PostForm from './PostForm';

/** Main routes for Microblog App 
 * 
 * Props:
 *  posts -> array of posts from App state
 *  addPost -> App state setter used in NewPostForm
 *  editPost -> App state setter used in PostPage -> EditPostForm
 *  deletePost -> App state setter used in PostPage -> EditPostForm
*/

function Routes() {

  return (
    <Switch>

      <Route exact path="/">
        <PostList />
      </Route>

      <Route exact path="/new">
        <PostForm />
      </Route>

      <Route path="/:id">
        <PostPage />
      </Route>

      <Redirect to="/" />

    </Switch>
  )
}

export default Routes;