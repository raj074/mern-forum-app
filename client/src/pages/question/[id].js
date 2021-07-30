import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getQuestion } from '../../redux/actions/questionAction';
import LoadIcon from "../../images/loading.gif";
import SingleQuestion from '../../components/Question/SingleQuestion';



const Question = () => {
    const { id } = useParams();
    const { auth, detailQuestion } = useSelector((state) => state);
    const [post, setPost] = useState([]);
    const [isBountyOpen, setIsBountyOpen] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(async () => {
      if (dispatch(getQuestion({ detailQuestion, id, auth }))) {
        if (detailQuestion.length > 0) {
          const newArr = detailQuestion.filter((post) => post._id === id);

          setPost(newArr);
        }
      } else {
        history.push("/");
      }
      
    }, [detailQuestion, dispatch, id, auth]);
    return (
      <div>
        {post.length === 0 && (
          <img
            src={LoadIcon}
            alt="Loading..."
            className="d-block mx-auto my-4"
          />
        )}
        {post.map((item) => (
          <SingleQuestion question={item} />
        ))}
      </div>
    );
}

export default Question
