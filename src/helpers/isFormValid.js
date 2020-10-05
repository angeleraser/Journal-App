import validator from "validator";
import { removeUiError, setUiError } from "../actions/ui";
export const isFormValid = (
  { name, email, password, confirmPassword },
  dispatch,
  error
) => {
  switch (true) {
    case !validator.isEmail(email):
      dispatch(setUiError("Please enter a valid email"));
      return false;
    case validator.isEmpty(name):
      dispatch(setUiError("Please enter a valid name"));
      return false;
    case password !== confirmPassword || password.length < 6:
      dispatch(setUiError("Please enter a valid password"));
      return false;
    default:
      error && dispatch(removeUiError());
      return true;
  }
};
