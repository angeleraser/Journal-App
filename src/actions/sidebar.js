import { TYPES } from "../types/types";

export const openSidebar = () => ({
  type: TYPES.sidebarOpen,
});

export const closedSidebar = () => ({
  type: TYPES.sidebarClosed,
});
