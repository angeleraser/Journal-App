import { TYPES } from "../../types/types";
export const sidebarReducer = (state = { isOpen: false }, action) => {
  switch (action.type) {
    case TYPES.sidebarOpen:
      return {
        isOpen: true,
      };
    case TYPES.sidebarClosed:
      return {
        isOpen: false,
      };
    default:
      return state;
  }
};
