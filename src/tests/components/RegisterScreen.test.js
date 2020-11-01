import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { RegisterScreen } from "../../components/auth/RegisterScreen";
import { TYPES } from "../../types/types";
// Mock
// jest.mock("../../actions/auth", () => {
//   return {
//     startGoogleLogin: jest.fn(),
//     startLoginEmailPassword: jest.fn(),
//   };
// });

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
// Fix dispatch del store si las acciones a evaluar son asincronas
// store.dispatch = jest.fn();
const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <RegisterScreen />
    </MemoryRouter>
  </Provider>
);
describe("Testing Login Screen", () => {
  test("should match to snap", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should dispatch setError action", () => {
    wrapper.find("form").simulate("submit", {
      preventDefault() {},
    });
    const actions = store.getActions();
    expect(actions.some((action) => action.type === TYPES.uiSetError));
  });

  test("should render msgError HTML element", () => {
    const initState = {
      ui: {
        loading: false,
        errorMsg: "Please enter a valid email",
      },
    };
    let store = mockStore(initState);
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <RegisterScreen />
        </MemoryRouter>
      </Provider>
    );
    const msgErrorElement = wrapper.find(".auth__invalid-form-msg");
    expect(msgErrorElement.exists()).toBe(true);
    expect(msgErrorElement.text().trim()).toBe("Please enter a valid email");
  });
});
