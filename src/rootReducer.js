import {
  GET_TITLES,
  GET_POST,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  GET_COMMENT,
  ADD_COMMENT,
  DELETE_COMMENT
} from './actionTypes';

const INITIAL_STATE = { 
  posts: {

  },
  titles: [

  ]
}
  
/*
 redux structure for backend integration:

 {
   posts: { post pages we have visted }
   title: { id,title,description,votes received from backend }
 }

   - ADDING NEW POST
      - add a comments array
      - add to posts
      - add smaller data set to titles
  - REMOVING A POST
      - remove from posts
      - remove from titles
  - EDITING A POST
      - edit post in-place
      - edit titles in-place
 - adding/removing a comment will update the post in posts
*/

function rootReducer(state = INITIAL_STATE, action) {
  const post = state[action.post];
  
  switch (action.type) {
    case GET_TITLES:
      return {
        ...state,
        titles: action.titles
      };

    case GET_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.post.id]: action.post 
        }
      };

    case ADD_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.post.id]: action.post
        }
      }

    case EDIT_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.post.id]: {
            ...state.posts[action.post.id],
            ...action.post
        }
      }
    }

    // TERRY! START EDITING REDUCER HERE

    case DELETE_POST:
      const postsCopy = { ...state };
      delete postsCopy[action.postId];
      return postsCopy;

    case GET_COMMENT:
      return ;


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
