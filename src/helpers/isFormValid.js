import validator from "validator";
import { setUiError } from "../actions/ui";
export const isFormValid = (
  { name, email, password, confirmPassword },
  dispatch
) => {
  if (!validator.isEmail(email)) {
    dispatch(setUiError("Please enter a valid email"));
    return false;
  } else if (validator.isEmpty(name)) {
    dispatch(setUiError("Please enter a valid name"));
    return false;
  } else if (password !== confirmPassword || password.length < 6) {
    dispatch(setUiError("Please enter a valid password"));
    return false;
  }
  return true;
};
