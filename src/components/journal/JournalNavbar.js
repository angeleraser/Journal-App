import React from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";

export const JournalNavbar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <div className="journal__sidebar-navbar">
      <h3>
        <span>Angel</span>
      </h3>
      <button onClick={handleLogout} className="btn">
        Logout
      </button>
    </div>
  );
};
