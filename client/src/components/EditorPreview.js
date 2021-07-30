import React from 'react'
import ReactMarkdown from "react-markdown";
import { render } from "react-dom";


const EditorPreview = () => {
    return (
      <div>
        
          <ReactMarkdown># Hello, *world*!</ReactMarkdown>
      </div>
    );
}

export default EditorPreview;
