import React from 'react';
import { useDispatch } from 'react-redux';
import { changeVoteAPI } from './actions';
import './Votes.css'

// Voting component - handles displaying and modifying votes for a post
function Votes({ voteCount, postId }) {
  const dispatch = useDispatch();
  let id = parseInt(postId);

  return (
    <div className="votesContainer" >
        <i className="fa fa-thumbs-down down" onClick={() => dispatch(changeVoteAPI(id, "down"))} ></i>
      {voteCount} Votes
        <i className="fa fa-thumbs-up up" onClick={() => dispatch(changeVoteAPI(id, "up"))} ></i>
    </div>
  )
}

export default Votes;