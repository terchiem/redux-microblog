import React from 'react';
import { Link } from 'react-router-dom';
import './PostListItem.css';
import Votes from './Votes';

/** Presentational Component that provides a link to a post
 * 
 * Props:
 *    id, title, description -> info about post
 */

function PostListItem({ id, title, description, votes }) {
  return (
    <div className="PostListItem">
      <Link to={`/${id}`}>
        {title}
      </Link>
      <p>{description}</p>
      <Votes voteCount={votes} postId={id} />
    </div>
  )
}

export default PostListItem;