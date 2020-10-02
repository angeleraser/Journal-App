import React from "react";
import { addIconSvg } from "../../icons/svg";

export const AddNewEntry = () => {
  return (
    <button className="journal__new-entry">
      Add New entry
      {addIconSvg}
    </button>
  );
};
