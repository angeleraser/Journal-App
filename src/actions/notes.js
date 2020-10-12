import Swal from "sweetalert2";
import { dataBase } from "../firebase/firebase-config";
import { uploadFile } from "../helpers/fileUpload";
import { fetchUserInfoFromDatabase } from "../helpers/loadNotes";
import { TYPES } from "../types/types";

export const addNewNote = () => {
  return async (dispatch, getState) => {
    // getState returns the current main state and it can be used in async operations
    const {
      auth: { uID },
    } = getState();
    const newEntry = {
      body: "",
      title: "",
      date: new Date().getTime(),
      imgURL: null,
    };
    /*
     Collection journal by user ID 
    */
    const DOCUMENT_REF = await dataBase
      .collection(`${uID}/journal/notes`)
      .add(newEntry);
    dispatch(selectNote(DOCUMENT_REF.id, newEntry));
    dispatch(updateNoteList(DOCUMENT_REF.id, newEntry));
  };
};

export const selectNote = (id, note) => {
  return {
    type: TYPES.notesSelect,
    payload: {
      id,
      ...note,
    },
  };
};

export const setNotes = (notes) => {
  return {
    type: TYPES.notesLoad,
    payload: notes,
  };
};

export const startLoadingNotes = (uID) => {
  return async (dispatch) => {
    const notes = await fetchUserInfoFromDatabase(uID, "journal/notes");
    dispatch(setNotes(notes));
  };
};

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const {
      auth: { uID },
    } = getState();
    const noteToFirestore = { ...note };
    delete noteToFirestore.id;
    await dataBase
      .doc(`${uID}/journal/notes/${note.id}`)
      .update(noteToFirestore);
    dispatch(refreshNote(note.id, noteToFirestore));
    Swal.fire("Saved", note.title, "success");
  };
};

export const refreshNote = (id, note) => ({
  type: TYPES.notesUpdate,
  payload: {
    id,
    note,
  },
});

export const startUploadingImage = (file) => {
  return async (dispatch, getState) => {
    const { selected } = getState().notes;
    Swal.fire({
      title: "Uploading...",
      text: "Please wait a few seconds...",
      allowOutsideClick: false,
      onBeforeOpen() {
        Swal.showLoading();
      },
    });
    const fileURL = await uploadFile(file);
    selected.imgURL = fileURL;
    Swal.close();
    dispatch(startSaveNote(selected));
  };
};

export const startDeletingNote = (id) => {
  return async (dispatch, getState) => {
    const uID = getState().auth.uID;
    dataBase.doc(`${uID}/journal/notes/${id}`).delete();
    dispatch(deleteNote(id));
  };
};

export const deleteNote = (id) => ({
  type: TYPES.notesDelete,
  payload: {
    id,
  },
});

export const cleanNotesAfterLogout = () => ({
  type: TYPES.notesLogoutCleaning,
});

export const updateNoteList = (id, note) => {
  return {
    type: TYPES.notesAddNew,
    payload: {
      id,
      ...note,
    },
  };
};
