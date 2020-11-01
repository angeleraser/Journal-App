import "@testing-library/jest-dom";
import { TYPES } from "../../types/types";

describe("Testing Object Action types", () => {
  test("should be equal to TYPES ", () => {
    expect(TYPES).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",

      uiSetError: "[UI] Set Error",
      uiRemoveError: "[UI] Remove Error",

      sidebarOpen: "[Sidebar] Open",
      sidebarClosed: "[Sidebar] Closed",

      uiStartLoading: "[UI] Start Loading",
      uiFinishLoading: "[UI] Finish Loading",

      notesAddNew: "[Notes] Add new note",
      notesSelect: "[Notes] Select note",
      notesLoad: "[Notes] Load notes",
      notesUpdate: "[Notes] Update note",
      notesFileURL: "[Notes] Update image url",
      notesDelete: "[Notes] Delete note",
      notesLogoutCleaning: "[Notes] Logout cleaning",
    });
  });
});
