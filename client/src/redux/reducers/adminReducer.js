import { ADMIN_TYPES } from "../actions/adminAction";
import { DeleteData } from "../actions/globalTypes";

const initialState = {
    total_users: 0,
    total_questions: 0,
    total_answers: 0,
    total_upvotes: 0,
    total_downvotes: 0,
    total_active_questions: 0,
    total_closed_questions: 0,
    total_bountied_questions: 0,
    total_tags: 0,
    loading: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_TYPES.GET_TOTAL_USERS:
      return {
        ...state,
        total_users: action.payload.total_users,
      };

    case ADMIN_TYPES.GET_TOTAL_QUESTIONS:
      return {
        ...state,
        total_questions: action.payload.total_questions,
      };

    case ADMIN_TYPES.GET_TOTAL_ANSWERS:
      return {
        ...state,
        total_answers: action.payload.total_answers,
      };

    case ADMIN_TYPES.GET_TOTAL_UPVOTES:
      return {
        ...state,
        total_upvotes: action.payload.total_upvotes,
      };

      case ADMIN_TYPES.GET_TOTAL_DOWNVOTES:
      return {
        ...state,
        total_downvotes: action.payload.total_downvotes,
      };

    case ADMIN_TYPES.GET_TOTAL_ACTIVE_QUESTIONS:
      return {
        ...state,
        total_active_questions: action.payload.total_active_questions,
      };

    case ADMIN_TYPES.GET_TOTAL_BOUNTIED_QUESTIONS:
      return {
        ...state,
        total_bountied_questions: action.payload.total_bountied_questions,
      };

      case ADMIN_TYPES.GET_TOTAL_CLOSED_QUESTIONS:
      return {
        ...state,
        total_closed_questions: action.payload.total_closed_questions,
      };

      case ADMIN_TYPES.GET_TOTAL_TAGS:
      return {
        ...state,
        total_tags: action.payload.total_tags,
      };

    case ADMIN_TYPES.LOADING_ADMIN:
      return {
        ...state,
        loading: action.payload,
      };


    default:
      return state;
  }
};

export default authReducer;
