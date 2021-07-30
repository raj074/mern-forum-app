import React from 'react'

const LeftSide = ({post}) => {
    return (
      <div className="postcard_leftside">
        <span className="display_block">
          <span>{post.upvotes.length}</span>
          <span style={{ fontSize: "12px" }}>Votes</span>
        </span>
        <span className="display_block">
          <span>{post.reports.length}</span>
          <span style={{ fontSize: "12px" }}>downvotes</span>
        </span>
        <span className="display_block">
          <span>{post.answers.length}</span>
          <span style={{ fontSize: "12px" }}>answers</span>
        </span>
      </div>
    );
}

export default LeftSide
