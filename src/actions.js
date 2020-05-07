import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from './actionTypes';

export function addPost(post, postId) {
  return {
    type: ADD_POST,
    post,
    postId
  }
}

export function deletePost(postId) {
  return {
    type: DELETE_POST,
    postId
  }
}

export function editPost(post, postId) {
  return {
    type: EDIT_POST,
    post,
    postId
  }
}

export function addComment(postId, commentId, newComment) {
  return {
    type: ADD_COMMENT,
    postId,
    commentId,
    newComment
  }
}

export function deleteComment(postId, commentId) {
  return {
    type: DELETE_COMMENT,
    postId,
    commentId
  }
}

