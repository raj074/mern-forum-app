import React from 'react'
import QuestionBody from './QuestionBody'
import QuestionFooter from './QuestionFooter';
import QuestionHeader from './QuestionHeader'

const SingleQuestion = ({ question }) => {
  return (
    <div className="single_question">
      <QuestionHeader question={question}  />
      <QuestionBody question={question} />
      <QuestionFooter question={question} />
    </div>
  );
};

export default SingleQuestion
