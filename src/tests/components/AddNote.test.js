import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { AddNote } from "../../components/notes/AddNote";
import { act } from "react-dom/test-utils";
import { selectNote } from "../../actions/notes";
import { TYPES } from "../../types/types";

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
    selected: {
      id: 1234,
      title: "Mi nota",
      body: "body",
      imgURL: "https://sadasdas.com",
    },
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
store.dispatch = jest.fn();
const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <AddNote />
    </MemoryRouter>
  </Provider>
);
// Fix dispatch del store si las acciones a evaluar son asincronas
jest.mock("../../actions/notes", () => {
  return { selectNote: jest.fn() };
});
describe("Testing <Sidebar/>", () => {
  // 1-
  test("should match with snap", () => {
    expect(wrapper).toMatchSnapshot();
  });
  //  2-
  test("should dispatch selectNote action", () => {
    const textarea = wrapper.find("input[type='text']");
    expect(textarea.exists()).toBe(true);
    textarea.simulate("change", {
      target: {
        name: "title",
        value: "New body",
      },
    });
    expect(selectNote).toHaveBeenLastCalledWith(initState.notes.selected.id, {
      title: "New body",
      body: "body",
      id: 1234,
      imgURL: "https://sadasdas.com",
    });
  });
});
