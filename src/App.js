import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Header from './Header';
import Routes from './Routes';

const TEST_POSTS = [
  {
    id: "1",
    title: "test post 1",
    description: "test description 1",
    body: "test body 1",
    comments: [
      {
        message: "this is a comment",
        id: 1
      },
      {
        message: "another comment here!",
        id: 2
      }
    ],
    votes: 0
  },
  {
    id: "2",
    title: "test post 2",
    description: "test description 2",
    body: "test body 2",
    comments: [],
    votes: 0
  }
]

/** Microblog app, allows a user to create and comment on a collection of posts 
 * 
 * State:
 *    posts -> array of post objects
*/

function App() {

  const [posts, setPosts] = useState(TEST_POSTS);

  function addPost(newPost) {
    setPosts(posts => ([...posts, newPost]));
  }

  function editPost(editedPost) {
    setPosts(posts => {
      const oldPosts = posts.filter(p => p.id !== editedPost.id);
      return [...oldPosts, editedPost];
    })
  }

  function deletePost(id) {
    setPosts(posts => posts.filter(p => p.id !== id));
  }

  function addComment(postId, newComment) {
    setPosts(posts => {
      const editedPost = posts.find(post => post.id === postId);
      const oldPosts = posts.filter(p => p.id !== editedPost.id);
      return [
        ...oldPosts,
        {
          ...editedPost,
          comments: [
            ...editedPost.comments,
            newComment
          ]
        }
      ]
    })
  }

  function deleteComment(postId, commentId) {
    setPosts(posts => {
      const editedPost = posts.find(post => post.id === postId);
      const editedComments = editedPost.comments.filter(c => c.id !== commentId);
      return [
        ...posts.filter(p => p.id !== postId),
        {
          ...editedPost,
          comments: editedComments
        }
      ]
    });
    
  }
  

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes
          posts={posts}
          addPost={addPost}
          editPost={editPost}
          deletePost={deletePost}
          addComment={addComment}
          deleteComment={deleteComment}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;


/*

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

  State:
    posts -> array of post objects


  Header

  PostList
    PostListItem

  PostPage
    CommentList
      Comment
      CommentForm



  NewPostForm



  NewCommentForm
 */