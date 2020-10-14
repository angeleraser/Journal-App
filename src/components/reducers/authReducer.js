import { TYPES } from "../../types/types";
/*
  State = {} if the user is not authenticated
  State = {
    uID:#12334,
    name:'Name',
  } if the user is authenticated
 */
export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case TYPES.login:
      return {
        uID: action.payload.uID,
        name: action.payload.displayName,
        photoURL: action.payload.photoURL,
      };
    case TYPES.logout:
      return {};
    default:
      return state;
  }
};
