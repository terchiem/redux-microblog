import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Header from './Header';
import Routes from './Routes';

/** Microblog app, allows a user to create and comment on a collection of posts 
 * 
 * State:
 *    posts -> array of post objects
*/
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;


/*


TODO: Refactor action payloads
TODO: Refactor docstrings!!!


{
  unique-key: {
    id:
    title:
    description:
    body:
    comments: {
      comment-unique-key: message
    }
    votes:
  }
}

comment: {
  id:
  message:
}



OLD DATA STRUCTURE:
post: {
  id:
  title:
  description:
  body:
  comments: []
  votes:
}

comment: {
  id:
  message:
}



APP

  Redux:
    posts -> object of post objects


  Header

  PostList - redux
    PostListItem

  PostPage - redux (can we pull only one post?)
    CommentList
      Comment
      CommentForm



  NewPostForm



  
 */