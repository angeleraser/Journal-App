import React from "react";
import { useSelector } from "react-redux";
import { LoadingSpin } from "../LoadingSpin/LoadingSpin";

export const NothingSelected = () => {
  const { loading } = useSelector((state) => state.ui);
  return (
    <div className="nothing__main-content flex justify-center items-center w-full">
      {loading ? <LoadingSpin /> : "Create a new entry"}
    </div>
  );
};
