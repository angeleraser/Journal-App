import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { LoginScreen } from "../../components/auth/LoginScreen";
import { startLoginEmailPassword, startGoogleLogin } from "../../actions/auth";
// Mock
jest.mock("../../actions/auth", () => {
  return {
    startGoogleLogin: jest.fn(),
    startLoginEmailPassword: jest.fn(),
  };
});

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
// Hay que definir el estado inicial igual al de la aplicacion en ese punto
const initState = {
  auth: {},
  notes: {},
  ui: {
    loading: false,
    errorMsg: null,
  },
};
let store = mockStore(initState);
// Fix dispatch del store
store.dispatch = jest.fn();

describe("Testing Login Screen", () => {
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <LoginScreen />
      </MemoryRouter>
    </Provider>
  );

  test("should match to snap", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should dispatch google login", () => {
    wrapper.find(".google-btn-wrapper").prop("onClick")();
    expect(startGoogleLogin).toHaveBeenCalled();
  });

  test("should dispatch login with email and password", () => {
    wrapper.find("form").prop("onSubmit")({
      preventDefault() {},
    });
    expect(startLoginEmailPassword).toHaveBeenCalledWith("", "");
  });
});
