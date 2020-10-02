import React from "react";
import { AddNote } from "./AddNote";
import { NoteAppBar } from "./NoteAppBar";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content flex flex-col w-full">
      <NoteAppBar />
      <AddNote />
    </div>
  );
};
