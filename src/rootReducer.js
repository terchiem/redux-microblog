import posts from './postsReducer';
import titles from './titlesReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  posts,
  titles
});
