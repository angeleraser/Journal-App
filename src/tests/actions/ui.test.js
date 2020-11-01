const { setUiError, uiStartLoading, removeUiError, uiFinishLoading } = require("../../actions/ui");
const { TYPES } = require("../../types/types");

describe("Testing UI actions", () => {
  test("should return correctly objects", () => {
    const setUiErrorAction = setUiError("error");
    expect(setUiErrorAction).toEqual({
      type: TYPES.uiSetError,
      payload: "error",
    });

    const removeUiErrorAction = removeUiError();
    expect(removeUiErrorAction).toEqual({
      type: TYPES.uiRemoveError,
    });

    const uiStartLoadingAction = uiStartLoading();
    expect(uiStartLoadingAction).toEqual({
      type: TYPES.uiStartLoading,
    });

    const uiFinishLoadingAction = uiFinishLoading();
    expect(uiFinishLoadingAction).toEqual({
      type: TYPES.uiFinishLoading,
    });
  });
});
