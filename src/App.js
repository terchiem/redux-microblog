import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Header from './Header';
import Routes from './Routes';

/** Microblog app, allows a user to create and comment on a collection of posts */
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