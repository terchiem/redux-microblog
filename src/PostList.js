import React from 'react';
import { useSelector } from 'react-redux';
import './PostList.css';

import PostListItem from './PostListItem';

/** Displays a list of posts as PostListItem components
 * 
 * Props:
 *    posts -> array of posts from parent state
 */

function PostList() {

  const posts = useSelector(st => st);

  function renderPostListItems() {
    return Object.keys(posts).map(id => {
      const { title, description } = posts[id];
      return <PostListItem key={id} id={id} title={title} description={description} />
    });
  }

  return (
    <div className="PostList">
      {renderPostListItems()}
    </div>
  )
}

export default PostList;