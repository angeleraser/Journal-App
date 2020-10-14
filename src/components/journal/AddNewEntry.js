import React from "react";
import { useDispatch } from "react-redux";
import { addNewNote } from "../../actions/notes";
import { closedSidebar } from "../../actions/sidebar";
import { addIconSvg } from "../../icons/svg";

export const AddNewEntry = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(addNewNote());
        dispatch(closedSidebar());
      }}
      className="journal__new-entry">
      Add New entry
      {addIconSvg}
    </button>
  );
};
