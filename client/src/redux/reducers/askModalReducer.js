import { GLOBALTYPES } from "../actions/globalTypes";

const askModalReducer = (state = false, action) => {
  switch (action.type) {
    case GLOBALTYPES.ASK_MODAL:
      return action.payload;

    default:
      return state;
  }
};

export default askModalReducer;
