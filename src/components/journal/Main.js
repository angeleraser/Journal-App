import React from "react";
import { useSelector } from "react-redux";
import { NoteScreen } from "../notes/NoteScreen";
import { NothingSelected } from "./NothingSelected";
// import { NothingSelected } from "./NothingSelected";

export const Main = () => {
  const { selected } = useSelector(({ notes }) => notes);
  return (
    <main className="journal__main">
      {!!selected ? <NoteScreen /> : <NothingSelected />}
    </main>
  );
};
