import React from "react";
import { useDispatch } from "react-redux";
import { addNewNote } from "../../actions/notes";
import { addIconSvg } from "../../icons/svg";

export const AddNewEntry = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(addNewNote());
      }}
      className="journal__new-entry">
      Add New entry
      {addIconSvg}
    </button>
  );
};
