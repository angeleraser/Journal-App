/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNote, startDeletingNote } from "../../actions/notes";
import useForm from "../hooks/useForm";

export const AddNote = () => {
  const { selected } = useSelector(({ notes }) => notes);
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm({ ...selected });
  const { body, title } = formValues;
  useEffect(() => {
    reset(selected);
  }, [selected]);

  // Update the current note when the user edit the note
  useEffect(() => {
    dispatch(selectNote(selected.id, { ...formValues }));
  }, [body, title]);

  const handleDeleteNote = () => {
    dispatch(startDeletingNote(selected.id));
  };
  return (
    <div className="flex flex-col notes__add-note">
      <input
        name="title"
        onChange={handleInputChange}
        type="text"
        value={title}
        placeholder="Add a title"
      />
      <textarea
        onChange={handleInputChange}
        name="body"
        value={body}
        placeholder="What happened today?"></textarea>
      {!!selected.imgURL && (
        <div className="note-image">
          <img className="h-full btn-shadow" src={selected.imgURL} alt="note" />
        </div>
      )}
      <button onClick={handleDeleteNote} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
};
