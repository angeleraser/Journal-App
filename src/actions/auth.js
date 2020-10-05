import Swal from "sweetalert2";
import { FIREBASE, googleAuthProvider } from "..";
import { TYPES } from "../types/types";
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
        const { user } = await FIREBASE.auth().signInWithEmailAndPassword(
          email,
          password
        );
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
        const { user } = await FIREBASE.auth().createUserWithEmailAndPassword(
          email,
          password
        );
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
      {
        const { user } = await FIREBASE.auth().signInWithPopup(
          googleAuthProvider
        );
        dispatch(login(user.id, user.displayName));
      }
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
    await FIREBASE.auth().signOut();
    dispatch(logout());
  };
};

export const logout = () => ({
  type: TYPES.logout,
});
