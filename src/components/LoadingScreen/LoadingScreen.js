import React from "react";
import { LoadingSpin } from "../LoadingSpin/LoadingSpin";

export const LoadingScreen = () => {
  return (
    <div
      style={{
        backgroundColor: "#5c62c5",
      }}
      className="h-screen loading-screen w-full flex items-center justify-center">
      <LoadingSpin />
    </div>
  );
};
