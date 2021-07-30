import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GLOBALTYPES } from '../../redux/actions/globalTypes';
import { closeQuestion, reportQuestion } from '../../redux/actions/questionAction';
import { BASE_URL } from '../../utils/config';

const DropDown = ({ question }) => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleCloseQuestion = () => {
    dispatch(closeQuestion({ id: question._id, auth }));
    history.push("/");
  };

  const handleBounty = () => {
     dispatch({ type: GLOBALTYPES.BOUNTY_ID, payload: question._id });
     dispatch({ type: GLOBALTYPES.BOUNTY_MODAL, payload: true });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${BASE_URL}/question/${question._id}`);
    dispatch({ type: GLOBALTYPES.ALERT, payload: { success: "Link copied to clipboard." } });
  };

  const handleReportQuestion = () => {
    dispatch(reportQuestion({ question, auth }));
  };

  return (
    <div>
      <div className="nav-item dropdown" style={{ cursor: "pointer" }}>
        <span
          className="material-icons"
          id="moreLink"
          data-bs-toggle="dropdown"
          style={{ cursor: "pointer" }}
        >
          more_horiz
        </span>

        <div className="dropdown-menu">
          {auth.user._id === question.user._id && (
            <>
              <div className="dropdown-item">
                <span className="material-icons text-info"> create</span>Edit
                Question
              </div>
              {question.status !== "closed" && (
                  <div className="dropdown-item" onClick={handleCloseQuestion}>
                    <span className="material-icons text-danger">
                      highlight_off
                    </span>
                    Close Question
                  </div>

                  
              )}
              {question.status === "open" && (
                  <div className="dropdown-item" onClick={handleBounty}>
                  <span className="material-icons color-pink">
                    emoji_events
                  </span>
                  Put bounty
                </div>

                  
              )}
            </>
          )}

          <div className="dropdown-item" onClick={handleCopyLink}>
            <span className="material-icons text-primary">content_copy</span>
            Copy Link
          </div>
          <div className="dropdown-item" onClick={handleReportQuestion}>
            <span className="material-icons text-danger">report_problem</span>
            Report this question
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown
