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
    case TYPES.uiStartLoading:
      return {
        ...state,
        loading: true,
      };
    case TYPES.uiFinishLoading:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
