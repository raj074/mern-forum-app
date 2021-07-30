import { QUESTION_TYPES } from "../actions/questionAction";
import { EditData, DeleteData } from "../actions/globalTypes";

const initialState = {
  loading: false,
  questions: [],
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUESTION_TYPES.CREATE_QUESTION:
      return {
        ...state,
        questions: [action.payload, ...state.questions],
      };

    case QUESTION_TYPES.GET_QUESTIONS:
      return {
        ...state,
        questions: [...action.payload.questions],
      };

    

    case QUESTION_TYPES.UPDATE_QUESTION:
      return {
        ...state,
        questions: EditData(
          state.questions,
          action.payload._id,
          action.payload
        ),
      };

    case QUESTION_TYPES.CLOSE_QUESTION:
      return {
        ...state,
        questions: DeleteData(state.questions, action.payload),
      };


    case QUESTION_TYPES.LOADING_QUESTION:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};

export default questionReducer;
