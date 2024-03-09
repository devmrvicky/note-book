import { FaAngleRight } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { ImHome } from "react-icons/im";
import {
  changeCurrentDirName,
  removeDirFromDirBreadcrumb,
} from "@/features/folderSlice";
import { useNavigate } from "react-router-dom";

const FolderNav = () => {
  const { dirBreadcrumb } = useSelector((store) => store.folders);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDirNav = (folder) => {
    dispatch(removeDirFromDirBreadcrumb(folder));
    dispatch(changeCurrentDirName(folder));
    navigate(`/notes?folder=${folder}`);
  };

  return (
    dirBreadcrumb.length > 1 &&
    dirBreadcrumb[0] === "rootDir" && (
      <div className="border-b p-3 flex items-center text-sm dark:text-zinc-400  overflow-hidden ">
        {dirBreadcrumb.map((folder, index) => (
          <div key={folder} className="flex items-center gap-2 relative">
            <span
              className={`hover:text-zinc-200 cursor-pointer p-1 rounded hover:bg-zinc-500 min-w-fit  ${
                folder === "rootDir" && "sticky left-0"
              }`}
              onClick={() => handleDirNav(folder)}
            >
              {folder === "rootDir" ? <ImHome /> : folder}
            </span>
            {index < dirBreadcrumb.length - 1 && (
              <span>
                <FaAngleRight className="mr-3" />
              </span>
            )}
          </div>
        ))}
      </div>
    )
  );
};

export default FolderNav;
