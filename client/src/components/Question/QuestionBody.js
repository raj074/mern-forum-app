import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GLOBALTYPES } from '../../redux/actions/globalTypes';
import { upvote, removeUpVote } from '../../redux/actions/questionAction';
import UpVoteButton from '../UpVoteButton';

const QuestionBody = ({question}) => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
   const [loadVote, setLoadVote] = useState(false);
  const [isUpVoted, setIsUpVoted] = useState(false);

  

  useEffect(() => {
    if (question.upvotes.find((upvote) => upvote === auth.user._id)) {
      setIsUpVoted(true);
    } else {
      setIsUpVoted(false);
    }
  }, [question.upvotes, auth.user._id]);

  const handleUpVote = async () => {
    if (loadVote) return;
    
    setLoadVote(true);

    try {
      await dispatch(upvote({ question, auth }));
      setIsUpVoted(true);
    } catch (err) {
      setIsUpVoted(false);
    }
    
    setLoadVote(false);
  };

  const handleRemoveVote = async () => {
    if (loadVote) return;
    setLoadVote(true);
    try {
      dispatch(removeUpVote({ question, auth }));
      setIsUpVoted(false);
    } catch (err) {
      setIsUpVoted(true);
    }
    
    setLoadVote(false);
  };

    return (
      <div className="question_body row">
        <div className="col-2 question_body_left">
          {question.upvotes ? question.upvotes.length : 0} <i className="fa fa fa-arrow-up" style={{pointerEvents: "none"}} />
          {question.reports ? question.reports.length : 0} <i className="fa fa fa-arrow-down" style={{pointerEvents: "none"}} />
          {
            question.user._id !== auth.user._id && 
            <UpVoteButton
              isUpVoted={isUpVoted}
              handleUpVote={handleUpVote}
              handleRemoveVote={handleRemoveVote}
            />
          }
            
          
          
        </div>
        <div className="col-10 question_body_right">{question.body}</div>
      </div>
    );
}

export default QuestionBody
