import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from './actionTypes';

const INITIAL_STATE = { 
  1: {
    title: "test post 1",
    description: "test description 1",
    body: "test body 1",
    votes: 0,
    comments: {
      1: "this is a comment",
      2: "another comment here!"
      }
  },
  2: {
    title: "test post 2",
    description: "test description 2",
    body: "test body 2",
    votes: 0,
    comments: {
      1: "this is a comment",
      2: "another comment here!"
    }
  }
}
  
/*
 redux structure for backend integration:

 {
   posts: { post pages we have visted }
   title: { id,title,description,votes received from backend }
 }


 - adding a new post will add it into titles
 - removing a post will remove it from titles
 - editing a post will edit it from titles
 - adding/removing a comment will update the post in posts
*/

function rootReducer(state = INITIAL_STATE, action) {
  const post = state[action.postId];
  
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        [action.postId]: action.post
      }

    case EDIT_POST:
      return {
        ...state,
        [action.postId]: {...post, ...action.post}
      }

    case DELETE_POST:
      const postsCopy = { ...state };
      delete postsCopy[action.postId];
      return postsCopy;

    case ADD_COMMENT:

      const newPostCopy = { ...post };
      newPostCopy.comments = { 
        ...newPostCopy.comments, 
        [action.commentId]: action.newComment 
      };

      return {
        ...state,
        [action.postId]: newPostCopy
      }

    case DELETE_COMMENT:
      
      const postCopy = { ...post };
      postCopy.comments = { ...postCopy.comments };
      delete postCopy.comments[action.commentId];

      return {
        ...state,
        [action.postId]: postCopy
      };

      
    default:
      return state;
  }
}

export default rootReducer;
