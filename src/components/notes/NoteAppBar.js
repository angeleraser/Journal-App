import React from "react";

export const NoteAppBar = () => {
  return (
    <div className="notes__appbar w-full flex items-center justify-between">
      <h2>28 de agosto 2020</h2>
      <div className='flex items-center'>
        <button className="btn btn-rounded btn-shadow">Picture</button>
        <button className="btn btn-rounded btn-shadow">Save</button>
      </div>
    </div>
  );
};
