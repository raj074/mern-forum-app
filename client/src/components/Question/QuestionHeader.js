import React from 'react'
import moment from "moment";
import DropDown from './DropDown';

const QuestionHeader = ({ question }) => {
  return (
    <div className="question_header">
      <span className="question_header_title">
        <span>{question.title} </span>

        {question.status === "closed" && (
          <span className="text-danger">[Closed]</span>
        )}
        {question.status === "bounty" && (
          <span className="text-primary">
            +{question.bounty.value} [Bounty]
          </span>
        )}
        <span>
          <DropDown question={question} />
        </span>
      </span>
      <span className="question_header_time text-muted">
        Asked {moment(question.createdAt).fromNow()}
      </span>
      <span className="question_header_time text-muted">
        Bountied {moment(question.bounty.time).fromNow()}
      </span>
    </div>
  );
};

export default QuestionHeader
