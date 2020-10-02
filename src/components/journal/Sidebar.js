import React from "react";
import { AddNewEntry } from "./AddNewEntry";
import { JournalEntries } from "./JournalEntries";
import { JournalNavbar } from "./JournalNavbar";

export const Sidebar = () => {
  return (
    <aside className="journal__sidebar">
      <JournalNavbar />
      <AddNewEntry />
      <JournalEntries />
    </aside>
  );
};
