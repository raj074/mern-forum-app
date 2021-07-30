import { GLOBALTYPES, DeleteTag, DeleteData } from "./globalTypes";
import { QUESTION_TYPES } from "./questionAction";
import {
  postDataAPI,
  getDataAPI,
  patchDataAPI,
  deleteDataAPI,
} from "../../utils/fetchData";

export const TAG_TYPES = {
  GET_ALL_TAGS: "GET_ALL_TAGS",
  LOADING_TAGS: "LOADING_TAGS",
  UPDATE_TAG: "FOLLOW_TAG",
  GET_TAG_QUESTIONS: "GET_TAG_QUESTIONS",
};

export const getAllTags = (token) => async (dispatch) => {
    try {
      dispatch({ type: TAG_TYPES.LOADING_TAGS, payload: true });
      const res = await getDataAPI("tags", token);
      dispatch({
        type: TAG_TYPES.GET_ALL_TAGS,
        payload: { tags: [...res.data.tags] },
      });
  
      dispatch({ type: TAG_TYPES.LOADING_TAGS, payload: false });
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: err.response.data.msg,
        },
      });
    }
  };

  export const getTagQuestions = ({id, auth}) => async (dispatch) => {
    try {
      dispatch({ type: TAG_TYPES.LOADING_TAGS, payload: true });
      const res = await getDataAPI(`tag/${id}`, auth.token);
      
      dispatch({
        type: TAG_TYPES.GET_TAG_QUESTIONS,
        payload:  {tag:res.data.tag, tagQuestions:[...res.data.questions]},
      });
  
      dispatch({ type: TAG_TYPES.LOADING_TAGS, payload: false });
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: err.response.data.msg,
        },
      });
    }
  };

  export const follow = ({ tag, auth }) => async (dispatch) => {
    let newTag;

    newTag = { ...tag, followers: [...tag.followers, auth.user._id] };
    
    dispatch({ type: TAG_TYPES.UPDATE_TAG, payload: newTag });
    
    dispatch({ type: GLOBALTYPES.AUTH, payload: { ...auth, user:{...auth.user, followedTags: [...auth.user.followedTags, newTag] } } });
  
    
  
    try {
      const res = await patchDataAPI(
        `/tag/${tag._id}/follow`,
        null,
        auth.token
      );

      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { success: res.data.msg },
      });

    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  };

  export const unFollow = ({ tag, auth }) => async (dispatch) => {
    let newTag;

    newTag = { ...tag, followers: DeleteTag(tag.followers, auth.user._id) };
    
    dispatch({ type: TAG_TYPES.UPDATE_TAG, payload: newTag });

    dispatch({ type: GLOBALTYPES.AUTH, payload: { ...auth, user:{...auth.user, followedTags: DeleteData(auth.user.followedTags, tag._id) } } });
    
    try {
      const res = await patchDataAPI(
        `/tag/${tag._id}/unfollow`,
        null,
        auth.token
      );

      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { success: res.data.msg },
      });

    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  };


