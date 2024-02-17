import {
  addDirToDirBreadcrumb,
  changeCurrentDirName,
} from "@/features/folderSlice";
import { FcFolder } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../ui/context-menu";
import { CiPen } from "react-icons/ci";
import { IoTrashSharp } from "react-icons/io5";
import useFileDelete from "@/methods/useFileDelete";
import { useState } from "react";
import { RiLoader5Line } from "react-icons/ri";
import { ReloadIcon } from "@radix-ui/react-icons";

const Folder = ({ folderName, $id }) => {
  const [deleting, setDeleting] = useState(false);
  const { folders, currentDir } = useSelector((store) => store.folders);

  const dispatch = useDispatch();

  const handleOpenFolder = (e) => {
    const folder = folders.find((folder) => folder.$id === $id);
    if (!folder) {
      console.log(`folder doesn't find`);
      return;
    }
    dispatch(changeCurrentDirName(folderName));
    dispatch(addDirToDirBreadcrumb(folderName));
  };

  const handleDeleteFolder = async () => {
    try {
      setDeleting(true);
      await useFileDelete("folder", $id, currentDir, dispatch);
    } catch (error) {
      console.log(error.message);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div
          className="flex flex-col text-center items-center border dark:border-zinc-800 rounded-md active:scale-95 active:transition-all select-none relative"
          onDoubleClick={handleOpenFolder}
        >
          <FcFolder className="w-32 h-32" />
          <span>{folderName}</span>
          {deleting && (
            <div className="absolute bottom-2 right-2 flex items-center text-black dark:text-white">
              <ReloadIcon className="animate-spin mr-2 h-3 w-3" />
              <span className="tex-sm">Deleting...</span>
            </div>
          )}
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem
          className="flex items-center gap-2"
          // onClick={() => {
          //   navigate(`/text-editor/${title}`);
          // }}
          disabled
        >
          <CiPen className="w-4 h-4" />
          <span>Edit</span>
        </ContextMenuItem>
        <ContextMenuItem
          className="flex items-center gap-2 text-red-500"
          onClick={handleDeleteFolder}
          disabled={deleting}
        >
          {deleting ? (
            <>
              <RiLoader5Line />
              <span>Deleting...</span>
            </>
          ) : (
            <>
              <IoTrashSharp className="w-4 h-4" />
              <span>Delete</span>
            </>
          )}
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default Folder;
