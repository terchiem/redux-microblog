import {
  GET_POST,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  GET_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
  CHANGE_VOTE
} from './actionTypes';


function postsReducer(state = {}, action) {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        [action.post.id]: {
          ...action.post
        }
      };

    case ADD_POST:
      return {
        ...state,
        [action.post.id]: {
          ...action.post,
          comments: []
        }
      }

    case EDIT_POST:
      return {
        ...state,
        [action.post.id]: {
          ...state[action.post.id],
          ...action.post
        }
      }

    case DELETE_POST:
      const postsCopy = { ...state };
      delete postsCopy[action.postId];
      return postsCopy;


    case GET_COMMENTS:
      return {
        ...state,
        [action.postId]: {
          ...state.posts[action.postId],
          comments: action.comments
        }
      };

    case ADD_COMMENT:
      const updatedPost = { ...state[action.postId] };
      updatedPost.comments = [...updatedPost.comments, action.comment];

      return {
        ...state,
        [action.postId]: updatedPost
      }

    case DELETE_COMMENT:
      const postCopy = { ...state[action.postId] };
      postCopy.comments = postCopy.comments.filter(c => c.id !== action.commentId);

      return {
        ...state,
        [action.postId]: postCopy
      };

    case CHANGE_VOTE:
      return {
        ...state,
        [action.postId]: {
          ...state[action.postId],
          votes: action.votes
        }
      }

    default:
      return state;
  }
}

export default postsReducer;