import React from "react";
import { NoteScreen } from "../notes/NoteScreen";
// import { NothingSelected } from "./NothingSelected";

export const Main = () => {
  return (
    <main className="journal__main">
      {/* <NothingSelected /> */}
      <NoteScreen />
    </main>
  );
};
