import React from "react";
import { FlexBox } from "../util/index.util";
import { useDispatch, useSelector } from "react-redux";
import { FaAngleLeft } from "react-icons/fa6";
import {
  changeCurrentDirName,
  removeDirFromDirBreadcrumb,
} from "@/features/folderSlice";

const Breadcrumb = () => {
  const { currentPage } = useSelector((store) => store.page);
  const { dirBreadcrumb } = useSelector((store) => store.folders);

  const dispatch = useDispatch();

  const handleBackDir = () => {
    const prevDirName = dirBreadcrumb.at(-2);
    dispatch(changeCurrentDirName(prevDirName));
    dispatch(removeDirFromDirBreadcrumb(prevDirName));
  };

  return (
    <FlexBox
      direction="flex-col"
      justifyItems="justify-start"
      className="text-white"
    >
      <div className="flex items-center gap-1">
        {dirBreadcrumb.length > 1 && dirBreadcrumb[0] === "rootDir" && (
          <FaAngleLeft
            className="mr-3 w-7 h-7 active:scale-95 active:transition-all cursor-pointer hover:text-zinc-200"
            onClick={handleBackDir}
          />
        )}
        <h2 className="text-4xl max-[400px]:text-2xl">{currentPage}</h2>
      </div>
    </FlexBox>
  );
};

export default Breadcrumb;
