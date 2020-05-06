import React from 'react';
import { Link } from 'react-router-dom';
import './PostListItem.css';

/** Presentational Component that provides a link to a post
 * 
 * Props:
 *    id, title, description -> info about post
 */

function PostListItem({ id, title, description }) {
  return (
    <div className="PostListItem">
      <Link to={`/${id}`}>
        {title}
      </Link>
      <p>{description}</p>
    </div>
  )
}

export default PostListItem;