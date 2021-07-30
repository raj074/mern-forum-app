import { GLOBALTYPES } from "./globalTypes";
import {
  postDataAPI,
  getDataAPI,
  patchDataAPI,
  deleteDataAPI,
} from "../../utils/fetchData";

export const QUESTION_TYPES = {
  CREATE_QUESTION: "CREATE_QUESTION",
  LOADING_QUESTION: "LOADING_QUESTION",
  GET_QUESTIONS: "GET_QUESTIONS",
  GET_ALL_TAGS: "GET_ALL_TAGS",
  UPDATE_QUESTION: "UPDATE_QUESTION",
  GET_SINGLE_QUESTION: "GET_SINGLE_QUESTION",
  DELETE_QUESTION: "DELETE_QUESTION",
  REPORT_QUESTION: "REPORT_QUESTION",
  VOTE_QUESTION: "VOTE_QUESTION",
  CLOSE_QUESTION: "CLOSE_QUESTION",
  BOUNTY_QUESTION: "BOUNTY_QUESTION",
};

export const createQuestion =
  ({ title, body, questionTags, auth }) =>
  async (dispatch) => {
    try {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });


      const res = await postDataAPI("questions", { title, body, questionTags }, auth.token);

      dispatch({
        type: QUESTION_TYPES.CREATE_QUESTION,
        payload: { ...res.data.newQuestion, user: auth.user },
      });

      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          success: res.data.msg,
        },
      });
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: err.response.data.msg,
        },
      });
    }
  };

export const getQuestions = (token) => async (dispatch) => {
  try {
    dispatch({ type: QUESTION_TYPES.LOADING_QUESTION, payload: true });
    const res = await getDataAPI("questions", token);
    dispatch({
      type: QUESTION_TYPES.GET_QUESTIONS,
      payload:  {questions:[...res.data.questions]},
    });

    dispatch({ type: QUESTION_TYPES.LOADING_QUESTION, payload: false });
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg,
      },
    });
  }
};

export const getBountiedQuestions = (token) => async (dispatch) => {
  try {
    dispatch({ type: QUESTION_TYPES.LOADING_QUESTION, payload: true });
    const res = await getDataAPI("questions/bountied", token);
    dispatch({
      type: QUESTION_TYPES.GET_QUESTIONS,
      payload: { questions: [...res.data.questions] },
    });

    dispatch({ type: QUESTION_TYPES.LOADING_QUESTION, payload: false });
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg,
      },
    });
  }
};

export const getAllQuestions = (token) => async (dispatch) => {
  try {
    dispatch({ type: QUESTION_TYPES.LOADING_QUESTION, payload: true });
    const res = await getDataAPI("questions/all", token);
    dispatch({
      type: QUESTION_TYPES.GET_QUESTIONS,
      payload: { questions: [...res.data.questions] },
    });

    dispatch({ type: QUESTION_TYPES.LOADING_QUESTION, payload: false });
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg,
      },
    });
  }
};

export const getQuestionsFromEveryTags = (token) => async (dispatch) => {
  try {
    dispatch({ type: QUESTION_TYPES.LOADING_QUESTION, payload: true });
    const res = await getDataAPI("questions/everyTags", token);
    dispatch({
      type: QUESTION_TYPES.GET_QUESTIONS,
      payload: { questions: [...res.data.questions] },
    });

    dispatch({ type: QUESTION_TYPES.LOADING_QUESTION, payload: false });
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg,
      },
    });
  }
};

export const getQuestion = ({detailQuestion, id, auth}) => async (dispatch) => {
  let record = detailQuestion.filter(post => post._id === id)
  let x = detailQuestion.every((post) => post._id !== id)
  if (x) {
    try {
      dispatch({ type: QUESTION_TYPES.LOADING_QUESTION, payload: true });
      const res = await getDataAPI(`questions/${id}`, auth.token);

      dispatch({
        type: QUESTION_TYPES.GET_SINGLE_QUESTION,
        payload: res.data.question,
      });
      
      dispatch({ type: QUESTION_TYPES.LOADING_QUESTION, payload: false });
      return true;
    } catch (err) {
      
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: err.response.data.msg,
        },
      });
      return false;
    }
  }

};

export const upvote = ({question, auth}) => async (dispatch) => {

  
  const newQue = { ...question, upvotes: [...question.upvotes, auth.user._id] };

  

  try {
    await patchDataAPI(`question/${question._id}/upvote`, null, auth.token);
    dispatch({type: QUESTION_TYPES.UPDATE_QUESTION, payload: newQue});
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg,
      },
    });
  }
}

export const removeUpVote = ({ question, auth }) => async (dispatch) => {
  const newQue = {
    ...question,
    upvotes: question.upvotes.filter((upvote) => upvote !== auth.user._id),
  };

 
    
  try {
    await patchDataAPI(`question/${question._id}/removeVote`, null, auth.token);
    dispatch({ type: QUESTION_TYPES.UPDATE_QUESTION, payload: newQue });
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg,
      },
    });
  }
};

export const closeQuestion = ({ id, auth }) => async (dispatch) => {

  dispatch({ type: QUESTION_TYPES.CLOSE_QUESTION, payload: id });

  try {
      dispatch({ type: QUESTION_TYPES.LOADING_QUESTION, payload: true });
      const res = await patchDataAPI(`question/${id}/close`,null ,  auth.token);
      
      dispatch({ type: QUESTION_TYPES.BOUNTY_QUESTION, payload: res.data.question });
      
      dispatch({ type: QUESTION_TYPES.LOADING_QUESTION, payload: false });

      dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } });
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg,
      },
    });
  }
};


export const answerQuestion = ({ data, question, auth }) => async (dispatch) => {

  try {
      dispatch({ type: QUESTION_TYPES.LOADING_QUESTION, payload: true });
      const res = await postDataAPI(`question/${question._id}/answer`, data ,  auth.token);
      
      const newQue = {
        ...question,
        answers: [...question.answers, res.data.answer],
      };
      
      dispatch({ type: QUESTION_TYPES.UPDATE_QUESTION, payload: newQue });


      dispatch({ type: QUESTION_TYPES.LOADING_QUESTION, payload: false });

      dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } });
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg,
      },
    });
  }
};

export const reportQuestion = ({ question, auth }) => async (dispatch) => {
  
  const reportExist = question.reports.find(report => report === auth.user._id);

  if (reportExist && reportExist.length > 0) {
    return dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: "You have already reported this question." },
    });
  }
    const newQue = { ...question };
    newQue.reports.push(auth.user._id);

  dispatch({ type: QUESTION_TYPES.UPDATE_QUESTION, payload: newQue });
  

try {
  const res = await patchDataAPI(`question/${question._id}/report`, null, auth.token);
  dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } });
} catch (err) {
  dispatch({
    type: GLOBALTYPES.ALERT,
    payload: {
      error: err.response.data.msg,
    },
  });
}
};

export const putBounty = ({ id , auth, bounty }) => async (dispatch) => {
   
  dispatch({ type: QUESTION_TYPES.CLOSE_QUESTION, payload: id });
try {
  const res = await postDataAPI(`question/${id}/bounty`, {bounty}, auth.token);

  dispatch({ type: QUESTION_TYPES.BOUNTY_QUESTION, payload: res.data.question });
  dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } });
} catch (err) {
  dispatch({
    type: GLOBALTYPES.ALERT,
    payload: {
      error: err.response.data.msg,
    },
  });
}
};



