import axios from 'axios';
const BASE_URL = 'http://localhost:5000/api/posts';

class MicroBlogAPI {
  static async getTitles() {
    try {
      const results = await axios.get(BASE_URL);
      return results.data;
    } catch (err) {
      return err;
    }
  }

  // get a post
  static async getPost(postId) {
    try {
      const results = await axios.get(
        `${BASE_URL}/${postId}`
      );
      return results.data;
    } catch (err) {
      return err;
    }
  }
    
  // create a post
  static async createPost(post) {
    try {
      const results = await axios.post(
        `${BASE_URL}}`,
        post
      );
      return results.data;
    } catch (err) {
      return err;
    }
  }
  
  // edit a post
  static async editPost(post, postId) {
    try {
      const results = await axios.put(
        `${BASE_URL}/${postId}`,
        post
      );
      return results.data;
    } catch (err) {
      return err;
    }
  }

  // delete a post
  static async deletePost(postId) {
    try {
      const results = await axios.delete(
        `${BASE_URL}/${postId}`
      );
      return results.data;
    } catch (err) {
      return err;
    }
  }

  // get comments for a post
  static async getComments(postId) {
    try {
      const results = await axios.get(
        `${BASE_URL}/${postId}/comments`
      );
      return results.data;
    } catch (err) {
      return err;
    }
  }

  // add a comment
  static async createComment(postId, comment) {
    try {
      const results = await axios.post(
        `${BASE_URL}/${postId}/comments`,
        comment
      );
      return results.data;
    } catch (err) {
      return err;
    }
  }
  // delete a comment
  static async deleteComment(postId, commentId) {
    try {
      const results = await axios.delete(
        `${BASE_URL}/${postId}/comments/${commentId}`,
      );
      return results.data;
    } catch (err) {
      return err;
    }
  }

}

export default MicroBlogAPI;

// getTitles
