import "./Main.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// import Chart from "../charts/Chart";
import {
  getTotalUsers,
  getTotalQuestions,
  getTotalActiveQuestions,
  getTotalBountiedQuestions,
  getTotalClosedQuestions,
  getTotalAnswers,
  getTotalUpvotes,
  getTotalDownvotes,
  getTotalTags,
} from "../../../redux/actions/adminAction";


const Main = () => {
    const { auth, admin } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getTotalUsers(auth.token));
      dispatch(getTotalQuestions(auth.token));
      dispatch(getTotalActiveQuestions(auth.token));
      dispatch(getTotalBountiedQuestions(auth.token));
      dispatch(getTotalClosedQuestions(auth.token));
      dispatch(getTotalUpvotes(auth.token));
      dispatch(getTotalDownvotes(auth.token));
      dispatch(getTotalTags(auth.token));
      dispatch(getTotalAnswers(auth.token));
    }, [dispatch, auth.token, auth]);
  return (
    <div className="main_admin">
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          <div className="main__greeting">
            <h1>Hello {auth.user.username}</h1>
            <p>Welcome to your Admin Dashboard</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div className="card_admin">
            <i
              className="fa fa-users fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card_inner_admin">
              <p className="text-primary-p">Total Users</p>
              <span className="font-bold text-title">{admin.total_users}</span>
            </div>
          </div>

          <div className="card_admin">
            <i className="fas fa-question fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner_admin">
              <p className="text-primary-p">Total Questions</p>
              <span className="font-bold text-title">
                {admin.total_questions}
              </span>
            </div>
          </div>

          <div className="card_admin">
            <i className="fas fa-chart-line fa-2x text-green" aria-hidden="true"></i>
            <div className="card_inner_admin">
              <p className="text-primary-p">Total Active Questions</p>
              <span className="font-bold text-title">
                {admin.total_active_questions}
              </span>
            </div>
          </div>

          <div className="card_admin">
            <i className="fas fa-store-alt-slash fa-2x" style={{color: "#993300"}} aria-hidden="true"></i>
            <div className="card_inner_admin">
              <p className="text-primary-p">Total Closed Questions</p>
              <span className="font-bold text-title">
                {admin.total_closed_questions}
              </span>
            </div>
          </div>

          <div className="card_admin">
            <i className="fas fa-award fa-2x text-info"  aria-hidden="true"></i>
            <div className="card_inner_admin">
              <p className="text-primary-p">Total Bountied Questions</p>
              <span className="font-bold text-title">
                {admin.total_bountied_questions}
              </span>
            </div>
          </div>

          <div className="card_admin">
            <i className="fas fa-hashtag fa-2x " style={{color: "orange"}} aria-hidden="true"></i>
            <div className="card_inner_admin">
              <p className="text-primary-p">Total Tags</p>
              <span className="font-bold text-title">
                {admin.total_tags}
              </span>
            </div>
          </div>

          <div className="card_admin">
            <i className="fas fa-thumbs-up fa-2x text-primary" aria-hidden="true"></i>
            <div className="card_inner_admin">
              <p className="text-primary-p">Total Upvotes</p>
              <span className="font-bold text-title">
                {admin.total_upvotes}
              </span>
            </div>
          </div>

          <div className="card_admin">
            <i className="fas fa-thumbs-down fa-2x " style={{color: "#ff0066"}}  aria-hidden="true"></i>
            <div className="card_inner_admin">
              <p className="text-primary-p">Total Downvotes</p>
              <span className="font-bold text-title">
                {admin.total_downvotes}
              </span>
            </div>
          </div>

          <div className="card_admin">
            <i className="fas fa-chalkboard-teacher fa-2x" style={{color: "#00ff00"}} aria-hidden="true"></i>
            <div className="card_inner_admin">
              <p className="text-primary-p">Total Answers</p>
              <span className="font-bold text-title">
                {admin.total_answers}
              </span>
            </div>
          </div>

          


        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE 
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart />
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Income</h1>
                <p>$75,300</p>
              </div>

              <div className="card2">
                <h1>Sales</h1>
                <p>$124,200</p>
              </div>

              <div className="card3">
                <h1>Users</h1>
                <p>3900</p>
              </div>

              <div className="card4">
                <h1>Orders</h1>
                <p>1881</p>
              </div>
            </div>
          </div>
        </div>
        CHARTS ENDS HERE --> */}
      </div>
    </div>
  );
};

export default Main;
