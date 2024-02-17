import { Folder } from "@/components/index.components";
import { changeCurrentPage } from "@/features/pageSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Docs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeCurrentPage("Docs"));
  }, []);
  return (
    <div className="flex gap-4 p-3 flex-wrap">
      <Folder />
      <Folder />
      <Folder />
      <Folder />
      <Folder />
      <Folder />
    </div>
  );
};

export default Docs;
