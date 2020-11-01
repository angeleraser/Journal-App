import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";
import { crossIcon } from "../../svg-icons";
import { SidebarButton } from "./SidebarButton";

export const JournalNavbar = () => {
  const dispatch = useDispatch();
  const { name: username, photoURL } = useSelector(({ auth }) => auth);
  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <div className={`journal__sidebar-navbar relative`}>
      <SidebarButton icon={crossIcon} />
      <div className="flex items-center user-profile">
        <span>{username}</span>
        {photoURL && <img src={photoURL} alt="user profile" />}
      </div>
      <button onClick={handleLogout} className="btn logout-button">
        Logout
      </button>
    </div>
  );
};
