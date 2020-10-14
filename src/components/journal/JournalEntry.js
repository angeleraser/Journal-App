import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import { selectNote } from "../../actions/notes";
import { closedSidebar } from "../../actions/sidebar";
import { parseText } from "../../helpers/parseText";
export const JournalEntry = ({ data }) => {
  const noteDate = moment(data.date);
  const dispatch = useDispatch();
  const handleSelectNote = () => {
    dispatch(selectNote(data.id, data));
    dispatch(closedSidebar());
  };
  return (
    <div onClick={handleSelectNote} className="journal__entry">
      <div
        style={{
          backgroundImage: `url(${
            data.imgURL ||
            "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
          })`,
          backgroundSize: "cover",
        }}
        className="journal__entry-picture"></div>
      <div className="journal__entry-body">
        <h2>{parseText(data.title, 30)}</h2>
        <p>{parseText(data.body, 90)}</p>
      </div>
      <div className="journal__entry-date-box">
        <p className="mr-1">{noteDate.format("dddd")}</p>
        <h2>{noteDate.format("D")}</h2>
      </div>
    </div>
  );
};
