const { authReducer } = require("../../components/reducers/authReducer");
const { TYPES } = require("../../types/types");

describe("Testing authReducer", () => {
  test("should return a user", () => {
    const action = {
      type: TYPES.login,
      payload: {
        uID: "12g5k678j5v2h3jv41",
        displayName: "angeleraser",
        photoURL: "angeleraser.jpg",
      },
    };
    // LOGIN
    let state = authReducer({}, action);
    expect(state).toEqual({
      uID: "12g5k678j5v2h3jv41",
      name: "angeleraser",
      photoURL: "angeleraser.jpg",
    });
    // LOGOUT
    state = authReducer(state, { type: TYPES.logout });
    expect(state).toEqual({});
    // UNDEFINED TYPE
    state = authReducer({}, action);
    state = authReducer(state, { type: TYPES.uiStartLoading });
    expect(state).toEqual({
      uID: "12g5k678j5v2h3jv41",
      name: "angeleraser",
      photoURL: "angeleraser.jpg",
    });
  });
});
