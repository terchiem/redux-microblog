import React from 'react';
import './PostList.css';

import PostListItem from './PostListItem';

/** Displays a list of posts as PostListItem components
 * 
 * Props:
 *    posts -> array of posts from parent state
 */

function PostList({ posts }) {

  function renderPostListItems() {
    return posts.map(p => (
      <PostListItem key={p.id} id={p.id} title={p.title} description={p.description} />
    ))
  }

  return (
    <div className="PostList">
      {renderPostListItems()}
    </div>
  )
}

export default PostList;