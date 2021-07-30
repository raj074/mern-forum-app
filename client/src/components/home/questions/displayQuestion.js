import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostCard from "./PostCard";

const Posts = ({question}) => {
  const { auth, theme } = useSelector((state) => state);
  const dispatch = useDispatch();


  
  return (
    <div className="posts">
      {question.length === 0 && (
        <h2 className="text-center">No Questions</h2>
      )}

      {question.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
