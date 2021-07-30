import React, { useState } from "react";
import moment from "moment";
import Avatar from "../Avatar";
import Editor from "../Editor";
import Answers from "./Answers";
import { answerQuestion } from "../../redux/actions/questionAction";
import { useDispatch, useSelector } from "react-redux";



const QuestionFooter = ({ question }) => {
  const dispatch = useDispatch();
  const {auth} = useSelector(state => state);
  const [editorValue, setEditorValue] = useState("");

  


  const submitAnswer = () => {
    
    console.log(editorValue);
    // dispatch(answerQuestion({ question, data, auth }));
  }

  return (
    <div className="question_footer">
      <div className="question_footer_container">
        <span className="text-muted" style={{ fontSize: "14px" }}>
          Asked {moment(question.createdAt).fromNow()}
        </span>
        <div className="d-flex m-1 p-1">
          <Avatar src={question.user.avatar} size="big-avatar" />
          <div className="d-flex flex-column ms-2">
            <span className="text-primary">
              {question.user.username}{" "}
              <i class="fa fa-circle color-c1" aria-hidden="true"></i>{" "}
              {question.user.points}
            </span>
            <span className="text-muted">{question.user.fullname}</span>
          </div>
        </div>
      </div>
      <hr
        style={{
          color: "#E4E6E8",
          backgroundColor: "#E4E6E8",
          width: "100%",
          height: "3px",
        }}
      />
      {question.answers.length > 0 && (
        <h6>{question.answers.length} Answers:</h6>
      )}
      {/* {question.answers.map((ans) => ( <Answers ans={ans} />) 
        
      )} */}

      <h3 className="text-muted">Your Answer:</h3>
      {question.status !== "closed" && (
        <div style={{ width: "70%", margin: "0 auto" }}>
          <Editor editorValue={editorValue} setEditorValue={setEditorValue} />
          <button
            onClick={submitAnswer}
            className="btn-1 outer-shadow hover-in-shadow mt-2"
          >
            Post Answer
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionFooter;
