import { GLOBALTYPES } from "./globalTypes";
import { getDataAPI, postDataAPI } from "../../utils/fetchData";

export const ADMIN_TYPES = {
  GET_TOTAL_USERS: "GET_TOTAL_USERS",
  GET_TOTAL_QUESTIONS: "GET_TOTAL_QUESTIONS",
  GET_TOTAL_ACTIVE_QUESTIONS: "GET_TOTAL_ACTIVE_QUESTIONS",
  GET_TOTAL_CLOSED_QUESTIONS: "GET_TOTAL_CLOSED_QUESTIONS",
  GET_TOTAL_BOUNTIED_QUESTIONS: "GET_TOTAL_BOUNTIED_QUESTIONS",
  GET_TOTAL_TAGS: "GET_TOTAL_TAGS",
  GET_TOTAL_ANSWERS: "GET_TOTAL_ANSWERS",
  GET_TOTAL_UPVOTES: "GET_TOTAL_UPVOTES",
  GET_TOTAL_DOWNVOTES: "GET_TOTAL_DOWNVOTES",
  LOADING_ADMIN: "LOADING_ADMIN",
};



export const getTotalUsers = (token) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_TYPES.LOADING_ADMIN, payload: true });
    const res = await getDataAPI("get_total_users", token);
    dispatch({ type: ADMIN_TYPES.GET_TOTAL_USERS, payload: res.data });

    dispatch({ type: ADMIN_TYPES.LOADING_ADMIN, payload: false });
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg,
      },
    });
  }
};


export const getTotalQuestions = (token) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_TYPES.LOADING_ADMIN, payload: true });
    const res = await getDataAPI("get_total_questions", token);
    dispatch({ type: ADMIN_TYPES.GET_TOTAL_QUESTIONS, payload: res.data });

    dispatch({ type: ADMIN_TYPES.LOADING_ADMIN, payload: false });
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg,
      },
    });
  }
};

export const getTotalActiveQuestions = (token) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_TYPES.LOADING_ADMIN, payload: true });
    const res = await getDataAPI("get_total_active_questions", token);
    dispatch({ type: ADMIN_TYPES.GET_TOTAL_ACTIVE_QUESTIONS, payload: res.data });

    dispatch({ type: ADMIN_TYPES.LOADING_ADMIN, payload: false });
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg,
      },
    });
  }
};

export const getTotalClosedQuestions = (token) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_TYPES.LOADING_ADMIN, payload: true });
    const res = await getDataAPI("get_total_closed_questions", token);
    dispatch({ type: ADMIN_TYPES.GET_TOTAL_CLOSED_QUESTIONS, payload: res.data });

    dispatch({ type: ADMIN_TYPES.LOADING_ADMIN, payload: false });
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg,
      },
    });
  }
};

export const getTotalBountiedQuestions = (token) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_TYPES.LOADING_ADMIN, payload: true });
    const res = await getDataAPI("get_total_bountied_questions", token);
    dispatch({ type: ADMIN_TYPES.GET_TOTAL_BOUNTIED_QUESTIONS, payload: res.data });

    dispatch({ type: ADMIN_TYPES.LOADING_ADMIN, payload: false });
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg,
      },
    });
  }
};

export const getTotalTags = (token) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_TYPES.LOADING_ADMIN, payload: true });
    const res = await getDataAPI("get_total_tags", token);
    dispatch({ type: ADMIN_TYPES.GET_TOTAL_TAGS, payload: res.data });

    dispatch({ type: ADMIN_TYPES.LOADING_ADMIN, payload: false });
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg,
      },
    });
  }
};


export const getTotalAnswers = (token) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_TYPES.LOADING_ADMIN, payload: true });
    const res = await getDataAPI("get_total_answers", token);
    dispatch({ type: ADMIN_TYPES.GET_TOTAL_ANSWERS, payload: res.data });

    dispatch({ type: ADMIN_TYPES.LOADING_ADMIN, payload: false });
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg,
      },
    });
  }
};


export const getTotalUpvotes= (token) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_TYPES.LOADING_ADMIN, payload: true });
    const res = await getDataAPI("get_total_upvotes", token);
    dispatch({ type: ADMIN_TYPES.GET_TOTAL_UPVOTES, payload: res.data });

    dispatch({ type: ADMIN_TYPES.LOADING_ADMIN, payload: false });
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg,
      },
    });
  }
};

export const getTotalDownvotes = (token) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_TYPES.LOADING_ADMIN, payload: true });
    const res = await getDataAPI("get_total_downvotes", token);
    dispatch({ type: ADMIN_TYPES.GET_TOTAL_DOWNVOTES, payload: res.data });

    dispatch({ type: ADMIN_TYPES.LOADING_ADMIN, payload: false });
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg,
      },
    });
  }
};

export const createTag = ({userData, auth}) => async (dispatch) => {
    
  if (!userData.tagName) {
    return dispatch({ type: GLOBALTYPES.ALERT, payload: { error: "Tag name cannot be empty!"} });
  }
  if (!userData.details) {
    return dispatch({ type: GLOBALTYPES.ALERT, payload: { error: "You must provide tag details!"} });
  }

  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

    const res = await postDataAPI("create_tag", userData, auth.token);

    dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } });
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: err.response.data.msg },
    });
  }
};
