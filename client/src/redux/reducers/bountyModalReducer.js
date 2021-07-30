import { GLOBALTYPES } from "../actions/globalTypes";

const initialState = {
  isOpen: false,
  id: null
}

const bountyModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.BOUNTY_MODAL:
      return {
        ...state,
        isOpen: action.payload
      };

    case GLOBALTYPES.BOUNTY_ID:
      return {
        ...state,
        id: action.payload
      };

    default:
      return state;
  }
};

export default bountyModalReducer;
