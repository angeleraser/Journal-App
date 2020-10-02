import { FIREBASE, googleAuthProvider } from "..";
import { TYPES } from "../types/types";

export const login = (uID, displayName) => ({
  type: TYPES.login,
  payload: {
    uID,
    displayName,
  },
});

export const startLoginEmailPassword = (email, password) => async (
  dispatch
) => {
  const { user } = await FIREBASE.auth().signInWithEmailAndPassword(
    email,
    password
  );
  console.log(user);
  dispatch(login(user.uid, user.displayName));
};

export const startRegisterWithEmailPasswordName = (
  email,
  password,
  name
) => async (dispatch) => {
  const { user } = await FIREBASE.auth().createUserWithEmailAndPassword(
    email,
    password
  );
  await user.updateProfile({ displayName: name });
  dispatch(login(user.uid, user.displayName));
};

export const startGoogleLogin = () => async (dispatch) => {
  const {
    user: { uid: ID, displayName },
  } = await FIREBASE.auth().signInWithPopup(googleAuthProvider);
  dispatch(login(ID, displayName));
};
