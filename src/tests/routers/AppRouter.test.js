import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { TYPES } from "../../types/types";
import { AppRouter } from "../../routers/AppRouter";
import { firebase } from "../../firebase/firebase-config";
import { login } from "../../actions/auth";
import { act } from "react-dom/test-utils";
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
// Hay que definir el estado inicial igual al de la aplicacion en ese punto
const initState = {
  auth: {},
  notes: {
    notes: [],
    selected: null,
  },
  ui: {
    loading: false,
    errorMsg: null,
  },
};
let store = mockStore(initState);
jest.mock("../../actions/auth", () => {
  return {
    login: jest.fn(),
  };
});
// Fix dispatch del store si las acciones a evaluar son asincronas
store.dispatch = jest.fn();

describe("Testing AppRouter", () => {
  //   test("should login if the user is authenticated", async (done) => {
  //     let user = null;
  //     await act(async () => {
  //       const userCredentials = await firebase
  //         .auth()
  //         .signInWithEmailAndPassword("testing12345@gmail.com", "123456");
  //       user = userCredentials.user;
  //       const wrapper = mount(
  //         <Provider store={store}>
  //           <MemoryRouter>
  //             <AppRouter />
  //           </MemoryRouter>
  //         </Provider>
  //       );
  //     });
  //     expect(login).toHaveBeenCalled();
  //     done();
  //   });
  test("should ", () => {});
});
