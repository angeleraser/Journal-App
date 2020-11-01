import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  addNewNote,
  startLoadingNotes,
  startSaveNote,
  startUploadingImage,
} from "../../actions/notes";
import { dataBase } from "../../firebase/firebase-config";
import { TYPES } from "../../types/types";
import "@testing-library/jest-dom";
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
  auth: {
    uID: "TESTING",
  },
  notes: {
    selected: {
      id: "4dRaRtgwqlfHNti987kp",
      title: "Testing note",
      body: "Testion note lorem ipsum dolor asit.",
    },
  },
};
let store = mockStore(initState);
describe("Testing notes actions", () => {
  // test("should create a new note", async (done) => {
  //   store = mockStore(initState);
  //   await store.dispatch(addNewNote());
  //   const actionsDispatched = store.getActions();
  //   const actionsTypes = actionsDispatched.map((a) => a.type);
  //   const actionsToDispatch = [
  //     TYPES.uiStartLoading,
  //     TYPES.uiFinishLoading,
  //     TYPES.notesSelect,
  //     TYPES.notesAddNew,
  //   ];
  //   expect(
  //     actionsToDispatch.every((action, index) => action === actionsTypes[index])
  //   ).toBe(true);
  //   const [
  //     ,
  //     ,
  //     {
  //       payload: { id },
  //     },
  //   ] = actionsDispatched;
  //   await dataBase.doc(`/TESTING/journal/notes/${id}`).delete();
  //   done();
  // });

  // test("should loading notes in the app", async (done) => {
  //   store = mockStore(initState);
  //   await store.dispatch(startLoadingNotes(initState.auth.uID));
  //   const actions = store.getActions();
  //   const { type, payload } = actions[0];
  //   const notes = payload;
  //   expect(type).toBe(TYPES.notesLoad);
  //   expect(payload).toEqual(expect.any(Array));
  //   console.log(notes);
  //   done();
  // });

  // test("should update the note", async () => {
  //   store = mockStore(initState);
  //   const note = {
  //     id: "4dRaRtgwqlfHNti987kp",
  //     title: "Testing note",
  //     body: "Testion note lorem ipsum dolor asit.",
  //   };
  //   await store.dispatch(startSaveNote(note));
  //   const actions = store.getActions();
  //   const docRef = await dataBase.doc(`/TESTING/journal/notes/${note.id}`);
  //   console.log(docRef.data);
  // });

  // test("should update the note imgURL", async () => {
  //   store = mockStore(initState);
  //   const file = new File([], "goto.png");
  //   await store.dispatch(startUploadingImage(file));
  // });
  test("should ", () => {});
});
