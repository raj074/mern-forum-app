import React from 'react'
import { useSelector } from 'react-redux';

const UpVoteButton = ({ isUpVoted, handleUpVote, handleRemoveVote }) => {
  const { theme } = useSelector((state) => state);
  
  return (
    <div>
      {isUpVoted ? (
        <i
          className="fa fa-2x fa-thumbs-up text-info"
          style={{ filter: theme ? "invert(1)" : "invert(0)" }}
          onClick={handleRemoveVote}
        />
      ) : (
        <i className="fa fa-2x fa-thumbs-up" onClick={handleUpVote} />
      )}
    </div>
  );
};

export default UpVoteButton
