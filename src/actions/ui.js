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

export const uiStartLoading = () => {
  return {
    type: TYPES.uiStartLoading,
  };
};

export const uiFinishLoading = () => {
  return {
    type: TYPES.uiFinishLoading,
  };
};
