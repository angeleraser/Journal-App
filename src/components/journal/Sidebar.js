import React from "react";
import { useSelector } from "react-redux";
import { AddNewEntry } from "./AddNewEntry";
import { JournalEntries } from "./JournalEntries";
import { JournalNavbar } from "./JournalNavbar";

export const Sidebar = () => {
  const { isOpen } = useSelector(({ sidebar }) => sidebar);
  return (
    <aside className={`journal__sidebar ${isOpen ? "active" : ""}`}>
      <JournalNavbar />
      <AddNewEntry />
      <JournalEntries />
    </aside>
  );
};
