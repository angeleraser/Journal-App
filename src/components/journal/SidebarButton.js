import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closedSidebar, openSidebar } from "../../actions/sidebar";

export const SidebarButton = ({ icon }) => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector(({ sidebar }) => sidebar);
  const handleOpenClosedSidebar = () => {
    if (isOpen) {
      dispatch(closedSidebar());
    } else {
      dispatch(openSidebar());
    }
  };
  return (
    <button onClick={handleOpenClosedSidebar} className="menu-btn">
      {icon}
    </button>
  );
};
