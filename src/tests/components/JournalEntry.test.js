import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { JournalEntry } from "../../components/journal/JournalEntry";
import { selectNote } from "../../actions/notes";
import { closedSidebar } from "../../actions/sidebar";

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
jest.mock("../../actions/notes", () => {
  return {
    selectNote: jest.fn(),
  };
});
jest.mock("../../actions/sidebar", () => {
  return {
    closedSidebar: jest.fn(),
  };
});
const note = {
  id: "1l6njkl2b4kh124",
  title: "Mi nota",
  body: "Mi cuerpo",
  date: 1241204912841209,
};
const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <JournalEntry data={note} />
    </MemoryRouter>
  </Provider>
);

describe("Testing <Sidebar/>", () => {
  // 1-
  test("should match with snap", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should active note and close sidebar", () => {
    wrapper.simulate("click");
    expect(selectNote).toHaveBeenCalled();
    expect(closedSidebar).toHaveBeenCalled();
  });
});
