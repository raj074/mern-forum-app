import React, { useEffect, useState } from 'react'
import  { useSelector, useDispatch } from 'react-redux'
import Posts from "../components/home/questions/displayQuestion";
import { getQuestions, getAllQuestions, getBountiedQuestions, getQuestionsFromEveryTags } from '../redux/actions/questionAction'
import LoadingIcon from '../images/loading.gif'

const Home = () => {
    const {auth, question} = useSelector(state => state);
    const dispatch = useDispatch();
    const [questionSet, setQuestionSet] = useState(0);

    const handleActive = () => {
        setQuestionSet(0);
        dispatch(getQuestions(auth.token));
    }

    const handleBountied = () => {
        setQuestionSet(1);
        dispatch(getBountiedQuestions(auth.token));
    }

    const handleAll = () => {
        setQuestionSet(2);
        dispatch(getAllQuestions(auth.token));
    }

    const handleEveryTags = () => {
        setQuestionSet(3);
        dispatch(getQuestionsFromEveryTags(auth.token));
    }

    useEffect(() => {
      dispatch(getQuestions(auth.token));
    }, [dispatch]);
    return (
      <div>
          
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
            <span onClick={handleActive}>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off"  />
                <label className={`btn btn-outline-primary ${questionSet === 0 && "active"}`} for="btnradio1">Followed Tags</label>
            </span>

            <span onClick={handleBountied}>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
                <label className={`btn btn-outline-primary ${questionSet === 1 && "active"}`} for="btnradio2">Bountied</label>
            </span>

            <span onClick={handleEveryTags}>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autocomplete="off"/>
                <label className={`btn btn-outline-primary ${questionSet === 3 && "active"}`} for="btnradio4">Every Tags</label>
            </span>

            <span onClick={handleAll}>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
                <label className={`btn btn-outline-primary ${questionSet === 2 && "active"}`} for="btnradio3">All</label>
            </span>

            
        </div>
        <br />
        {
              question.loading &&
              <div style={{width:"100%", display: "flex", justifyContent:'center'}}>
                  <img src={LoadingIcon}  />
              </div>
              
          }
        <Posts question={question.questions} />
        
      </div>
    );
}

export default Home
