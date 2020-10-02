import { TYPES } from "../../types/types";

const initState = {
  loading: false,
  errorMsg: null,
};

export const uiReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.uiSetError:
      return {
        ...state,
        errorMsg: action.payload,
      };
    case TYPES.uiRemoveError:
      return {
        ...state,
        errorMsg: null,
      };
    default:
      return state;
  }
};
