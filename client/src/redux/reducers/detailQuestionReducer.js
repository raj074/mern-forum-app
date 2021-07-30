import { EditData } from "../actions/globalTypes";
import { QUESTION_TYPES } from "../actions/questionAction";

const detailQuestionReducer = (state = [], action) => {
  switch (action.type) {
    case QUESTION_TYPES.GET_SINGLE_QUESTION:
      return [...state, ...action.payload];

    case QUESTION_TYPES.BOUNTY_QUESTION:
      return [ ...EditData(
          state,
          action.payload._id,
          action.payload
        )
      ]


    default:
      return state;
  }
};

export default detailQuestionReducer;
