import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import "@testing-library/jest-dom";
import {
  login,
  logout,
  startLoginEmailPassword,
  startLogout,
} from "../../../actions/auth";
import { TYPES } from "../../../types/types";
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
describe("Testing Auth", () => {
  beforeEach(() => {
    store = mockStore(initState);
  });
  test("should dispatch the respective actions login and logout", () => {
    const user = {
      uID: "j1g2kh56v71n1",
      displayName: "angeleraser",
      photoURL: "https://1jk4hk2b1312ks.jpg",
    };
    store.dispatch(login(user.uID, user.displayName, user.photoURL));
    store.dispatch(logout());
    const actions = store.getActions();
    expect(
      actions.every((a) => a.type === TYPES.login || a.type === TYPES.logout)
    ).toBe(true);
  });

  test("should dispatch logout and clean the notes", async () => {
    await store.dispatch(startLogout());
    const actions = store.getActions();
    expect(
      actions.every(
        (a) => a.type === TYPES.logout || a.type === TYPES.notesLogoutCleaning
      )
    ).toBe(true);
  });

//   test("should start login with email and password", async () => {
//     await store.dispatch(
//       startLoginEmailPassword("testing12345@gmail.com", "123456")
//     );
//     const actions = store.getActions();
//     console.log(actions);

//   });
});
