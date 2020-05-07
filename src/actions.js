import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from './actionTypes';

export function addPost(newPost, newId) {
  return {
    type: ADD_POST,
    newPost,
    newId
  }
}

export function deletePost(deleteId) {
  return {
    type: DELETE_POST,
    deleteId
  }
}

export function editPost(postData, editId) {
  return {
    type: EDIT_POST,
    editId,
    postData
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

