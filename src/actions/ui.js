import { TYPES } from "../types/types";

export const setUiError = (errorMsg) => {
  return {
    type: TYPES.uiSetError,
    payload: errorMsg,
  };
};

export const removeUiError = () => {
  return {
    type: TYPES.uiRemoveError,
  };
};
