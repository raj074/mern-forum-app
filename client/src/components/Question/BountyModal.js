import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";
import { putBounty } from "../../redux/actions/questionAction";

const BountyModal = () => {
  const dispatch = useDispatch();
  const { auth, bountyModal } = useSelector((state) => state);
  const [bounty, setBounty] = useState(10);
  const history = useHistory();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if(window.confirm(`Your ${bounty} points will be deducted.`)){
        
        dispatch(putBounty({ id:bountyModal.id , auth, bounty }));
        
        dispatch({ type: GLOBALTYPES.BOUNTY_MODAL, payload: false });
        return history.push("/");
      }
  };

  const handleClose = () => {
    dispatch({ type: GLOBALTYPES.BOUNTY_ID, payload: null })
    dispatch({ type: GLOBALTYPES.BOUNTY_MODAL, payload: false })
  };


  return (
    <div className="ask_modal">
      <form onSubmit={handleSubmit}>
        <div className="askModal_header">
          <h5 className="m-0">Put a bounty on Question</h5>
          <span
            onClick={handleClose}
          >
            &times;
          </span>
        </div>
        <div className="askModal_body">
          <div className="d-flex my-3 justify-content-between">
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <span onClick={() => setBounty(10)}>
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off"  />
                    <label className={`btn btn-outline-primary ${bounty === 10 && "active"}`} for="btnradio1">10</label>
                </span>

                
                <span onClick={() => setBounty(20)}>
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
                    <label className={`btn btn-outline-primary ${bounty === 20 && "active"}`} for="btnradio2">20</label>
                </span>

                <span onClick={() => setBounty(50)}>
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
                    <label className={`btn btn-outline-primary ${bounty === 50 && "active"}`} for="btnradio3">50</label>
                </span>

                <span onClick={() => setBounty(100)}>
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autocomplete="off"/>
                    <label className={`btn btn-outline-primary ${bounty === 100 && "active"}`} for="btnradio4">100</label>
                </span>

            </div>
            <span className="text-center color-c1" style={{fontWeight: "700",fontSize: "19px"}}>{bounty}</span>
          </div>
        </div>
        <div className="askModal_footer">
          <button type="submit" className="btn btn-primary w-100">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default BountyModal;
