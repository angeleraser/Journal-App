import React from "react";
import { Main } from "./Main"
import { Sidebar } from "./Sidebar";

export const JournalScreen = () => {
  return (
    <div className="journal__main-content">
      <Sidebar />
      <Main />
    </div>
  );
};
