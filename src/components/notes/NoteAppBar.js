import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploadingImage } from "../../actions/notes";

export const NoteAppBar = () => {
  const dispatch = useDispatch();
  const selected = useSelector(({ notes: { selected } }) => selected);
  const handleSaveNoteOnFirebase = () => {
    dispatch(startSaveNote(selected));
    console.log(selected);
  };
  const handleUploadImage = () => {
    const inputTypeFile = document.querySelector("#file-selector");
    inputTypeFile.click();
  };
  const handleFileChange = ({ target: { files } }) => {
    const file = files[0];
    if (file) {
      dispatch(startUploadingImage(file));
    }
  };
  return (
    <div className="notes__appbar w-full flex items-center justify-between">
      <h2>28 de agosto 2020</h2>
      <input
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
        id="file-selector"
      />
      <div className="flex items-center">
        <button
          onClick={handleUploadImage}
          className="btn btn-rounded btn-shadow">
          Picture
        </button>
        <button
          onClick={handleSaveNoteOnFirebase}
          className="btn btn-rounded btn-shadow">
          Save
        </button>
      </div>
    </div>
  );
};
