import { GLOBALTYPES } from "../actions/globalTypes";
import { TAG_TYPES } from "../actions/tagAction";

const initialState = {
    tags:[],
    loading: false,
  tagQuestions: [],
  tag: {},
};

const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TAG_TYPES.GET_ALL_TAGS:
      return {
          ...state,
          tags: [...action.payload.tags]
      };

      case TAG_TYPES.LOADING_TAGS:
      return {
          ...state,
          loading: action.payload
      };

      case TAG_TYPES.UPDATE_TAG:
      return {
          ...state,
          tag: action.payload
      };

      case TAG_TYPES.GET_TAG_QUESTIONS:
      return {
        ...state,
        tagQuestions: [...action.payload.tagQuestions],
        tag: {...action.payload.tag},
      };

    default:
      return state;
  }
};

export default tagsReducer;
