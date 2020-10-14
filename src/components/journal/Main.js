import React from "react";
import { useSelector } from "react-redux";
import { menuIcon } from "../../svg-icons";
import { NoteScreen } from "../notes/NoteScreen";
import { NothingSelected } from "./NothingSelected";
import { SidebarButton } from "./SidebarButton";
// import { NothingSelected } from "./NothingSelected";

export const Main = () => {
  const { selected } = useSelector(({ notes }) => notes);
  return (
    <main className="journal__main">
      {!!selected ? <NoteScreen /> : <NothingSelected />}
      <SidebarButton icon={menuIcon} />
    </main>
  );
};
