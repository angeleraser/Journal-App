import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { Sidebar } from "../../components/journal/Sidebar";
import { startLogout } from "../../actions/auth";
import { addNewNote } from "../../actions/notes";
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
// Hay que definir el estado inicial igual al de la aplicacion en ese punto
const initState = {
  auth: {
    name: "angeleraser",
    uID: "k1j2g5bk75j23",
    photoURL: null,
  },
  notes: {
    notes: [],
    selected: null,
  },
  ui: {
    loading: false,
    errorMsg: null,
  },
  sidebar: {
    isOpen: false,
  },
};
let store = mockStore(initState);
store.dispatch = jest.fn()
const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <Sidebar />
    </MemoryRouter>
  </Provider>
);
// MOCK AUTH
jest.mock("../../actions/auth", () => {
  return {
    startLogout: jest.fn(),
  };
});
// MOCK NOTES
jest.mock("../../actions/notes", () => {
  return {
    addNewNote: jest.fn(),
  };
});
describe("Testing <Sidebar/>", () => {
  // 1-
  test("should match with snap", () => {
    expect(wrapper).toMatchSnapshot();
  });
  //  2 -
  test("should call startLogout action", () => {
    const logoutButton = wrapper.find(".logout-button");
    // startLogout.mockReturnValue({ type: TYPES.logout });
    logoutButton.prop("onClick")();
    expect(logoutButton.exists()).toBe(true);
    expect(startLogout).toHaveBeenCalled();
  });
  // 3 -
  test("should call startNewNote action", () => {
    const addEntryButton = wrapper.find(".journal__new-entry");
    // addNewNote.mockReturnValue({ type: TYPES.notesAddNew });
    addEntryButton.prop("onClick")();
    expect(addEntryButton.exists()).toBe(true);
    expect(addNewNote).toHaveBeenCalled();
  });
});
