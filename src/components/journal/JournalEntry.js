import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import { selectNote } from "../../actions/notes";
export const JournalEntry = ({ data }) => {
  const noteDate = moment(data.date);
  const dispatch = useDispatch();
  const handleSelectNote = () => {
    dispatch(selectNote(data.id, data));
  };
  return (
    <div onClick={handleSelectNote} className="journal__entry">
      {data.imageURL && (
        <div
          style={{
            backgroundImage: `url(${data.imageURL})`,
            backgroundSize: "cover",
          }}
          className="journal__entry-picture"></div>
      )}
      <div className="journal__entry-body">
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>
      <div className="journal__entry-date-box">
        <p>{noteDate.format("dddd")}</p>
        <h2>{noteDate.format("D")}</h2>
      </div>
    </div>
  );
};
