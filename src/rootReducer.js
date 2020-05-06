import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from './actionTypes';

const INITIAL_STATE = { 
  posts: {
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
  }
  
  // TODO: DO CHANGES ON FORM SUBMISSION SIDE

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.newId]: action.newPost
        }
      }

    case EDIT_POST:
      // const editedPost = store.posts[action.editId]
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.editId]: action.postData
        }
      }

    case DELETE_POST:
      const postsCopy = {...state.posts};
      delete postsCopy[action.deleteId];
      return {
        ...state,
        posts: postsCopy
      }

    case ADD_COMMENT:
      const postsDuplicate = { ...state.posts };
      const commentsDuplicate = { ...postsDuplicate[action.postId].comments }
      return {
        ...state,
        posts: {
          ...postsDuplicate,
          [action.postId]: {
            ...[action.postId],
            commentsDuplicate: {
              ...[commentsDuplicate],
              [action.commentId]: action.newComment
            }
          }
        }
      }

    case DELETE_COMMENT:
      return ;

    default:
      return state;
  }
}

export default rootReducer;


/* 

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

*/