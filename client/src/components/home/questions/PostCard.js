import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const PostCard = ({ post }) => {
  return (
    <div className="card my-3 outer-shadow w-100">
      <div className="row postcard">
        <div className="col-2">
          <LeftSide post={post} />
        </div>
        <div className="col-10">
          <RightSide post={post} />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
