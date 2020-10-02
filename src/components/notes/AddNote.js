import React from "react";

export const AddNote = () => {
  return (
    <div className="flex flex-col notes__add-note">
      <input type="text" placeholder="Add a title" />
      <textarea placeholder="What happened today?"></textarea>
      <div className="note-image">
        <img
        className='h-full btn-shadow'
          src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80"
          alt=""
        />
      </div>
    </div>
  );
};
