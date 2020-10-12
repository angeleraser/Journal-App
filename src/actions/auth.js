import Swal from "sweetalert2";
import { TYPES } from "../types/types";
import { cleanNotesAfterLogout } from "./notes";
import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { uiStartLoading, uiFinishLoading } from "./ui";
// NOTA: Si la tarea es asincrona la funcion debe retonar otra funcion que realiza el dispatch, sino un objeto con el tipo de accion y el payload normal.

export const login = (uID, displayName) => ({
  type: TYPES.login,
  payload: {
    uID,
    displayName,
  },
});

export const startLoginEmailPassword = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(uiStartLoading());
      {
        const { user } = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        dispatch(login(user.uid, user.displayName));
      }
    } catch (error) {
      Swal.fire("Error", error.message, "error");
      console.log(error);
    } finally {
      dispatch(uiFinishLoading());
    }
  };
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return async (dispatch) => {
    try {
      dispatch(uiStartLoading());
      {
        const { user } = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        await user.updateProfile({ displayName: name });
        dispatch(login(user.uid, user.displayName));
      }
    } catch (error) {
      console.log(error);
      Swal.fire("Error", error.message, "error");
    } finally {
      dispatch(uiFinishLoading());
    }
  };
};

export const startGoogleLogin = () => {
  return async (dispatch) => {
    try {
      dispatch(uiStartLoading());
      const { user } = await firebase
        .auth()
        .signInWithPopup(googleAuthProvider);
      dispatch(login(user.uid, user.displayName));
    } catch (error) {
      console.log(error);
      Swal.fire("Error", error.message, "error");
    } finally {
      dispatch(uiFinishLoading());
    }
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
    dispatch(cleanNotesAfterLogout());
  };
};

export const logout = () => ({
  type: TYPES.logout,
});
