import React from 'react'
import moment from "moment";
import {Link} from "react-router-dom";

const RightSide = ({post}) => {
    return (
      <div className="postcard_rightside">
        <Link to={`/question/${post._id}`} className="upside my-1">{post.title}
        {post.status === "closed" && <span className="text-danger" style={{fontWeight:"700", fontSize:"19px"}}>[Closed]</span>}
        {post.status === "bounty" && <span className="text-primary" style={{fontWeight:"700", fontSize:"19px"}}>+{post.bounty.value} [Bounty] <span className="text-muted">-{moment(post.bounty.time).fromNow()}</span></span>}</Link>
        <div className="downside">
          <div className="post_tags">
            <>{post.tags.map(tag => (
              <Link to={`/tag/${tag._id}`}><span>{tag.tagName}</span></Link>
            ))}</>
          </div>
          <div className="post_author_info">
            <span className="text-muted">
              ~{moment(post.createdAt).fromNow()}
            </span>
            <span>{post.user.username}</span>
          </div>
        </div>
      </div>
    );
}

export default RightSide
