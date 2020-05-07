import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTitlesAPI } from './actions';
import './PostList.css';

import PostListItem from './PostListItem';

/** Displays a list of posts as PostListItem components 
 * 
 * Redux:
 *    posts -> main posts object
*/

function PostList() {

  const dispatch = useDispatch();
  const titles = useSelector(st => st.titles);

  useEffect(() => {
    dispatch(getTitlesAPI());
  }, [dispatch]);

  function renderPostListItems() {
    return titles.map(t => ( 
      <PostListItem 
        key={t.id} 
        id={t.id} 
        title={t.title} 
        description={t.description} 
      />
    ));
  }

  return (
    <div className="PostList">
      {renderPostListItems()}
    </div>
  )
}

export default PostList;