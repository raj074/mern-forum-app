import React, { Component, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

 const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
const MyComponent = ({ setEditorValue, editorValue }) => {
  return (
    <ReactQuill
      modules={modules}
      theme="snow"
      formats={formats}
      value={editorValue}
      onChange={(e) => setEditorValue(e)}
    />
  );
};

export default MyComponent;

