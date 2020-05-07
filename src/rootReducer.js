import {
  GET_TITLES,
  GET_POST,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  GET_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
  START_LOAD,
  END_LOAD
} from './actionTypes';

const INITIAL_STATE = {
  posts: {},
  titles: [],
  isLoading: true
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

    case DELETE_POST:
      const postsCopy = { ...state.posts };
      delete postsCopy[action.postId];
      return {
        ...state,
        posts: postsCopy
      }

    case GET_COMMENTS:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.postId]: {
            ...state.posts[action.postId],
            comments: action.comments
          }
        }
      };

    case ADD_COMMENT:
      const updatedPost = state.posts[action.postId];
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.postId]: {
            ...updatedPost,
            comments: [...updatedPost.comments, action.comment]
          }
        }
      }

    case DELETE_COMMENT:
      const postCopy = { ...state.posts[action.postId] };
      postCopy.comments = postCopy.comments.filter(c => c.id !== action.commentId);

      return {
        ...state,
        posts: {
          ...state.posts,
          [action.postId]: postCopy
        }
      };



    case START_LOAD:
      return {
        ...state,
        isLoading: true
      }

    case END_LOAD:
      return {
        ...state,
        isLoading: false
      }

    default:
      return state;
  }
}

export default rootReducer;
