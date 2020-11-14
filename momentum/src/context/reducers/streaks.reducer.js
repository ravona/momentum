import {
  GET_STREAKS,
  CREATE_STREAK,
  EDIT_STREAK,
  DELETE_STREAK,
} from "../types";

const streaksReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_STREAKS:
      return state;

    case CREATE_STREAK:
      const updatedStreaks = [state, payload];
      return {
        ...state,
        ...updatedStreaks,
      };
    case EDIT_STREAK:
      break;
    case DELETE_STREAK:
      break;

    default:
      return state;
  }
};

export default streaksReducer;
