import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { CiPen } from "react-icons/ci";
import { IoTrashSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RiLoader5Line } from "react-icons/ri";
import parse from "html-react-parser";
import getDate from "../../methods/getdate";
import useFileDelete from "@/methods/useFileDelete";
import { ReloadIcon } from "@radix-ui/react-icons";
import { MdOutlineDriveFileMove } from "react-icons/md";

const NoteCard = ({ $id, title, body, color, $updatedAt }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [deleting, setDeleting] = useState(false);

  const { currentDir } = useSelector((store) => store.folders);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOpenNote = (title) => {
    if (deleting) return;
    navigate(`/notes/${title}`);
  };

  const handleDeleteNote = async () => {
    try {
      setDeleting(true);
      await useFileDelete("note", $id, currentDir, dispatch);
    } catch (error) {
      console.log(error.message);
    } finally {
      setDeleting(false);
    }
  };

  useEffect(() => {
    const date = getDate($updatedAt);
    setDate(date.fullDate);
    setTime(date.fullTime);
  }, []);

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div
          className={`rounded p-2 pl-4 h-[150px] relative flex flex-col gap-2 active:scale-95 transition-all overflow-hidden select-none`}
          style={{ backgroundColor: `${color}6b` }}
          onDoubleClick={() => handleOpenNote(title)}
        >
          <div
            className="w-1 rounded h-full absolute top-0 left-0 shadow"
            style={{ backgroundColor: `${color}` }}
          ></div>
          <h2 className="text-sm font-semibold">{title}</h2>
          <div className="note-card-body text-sm text-zinc-600 dark:text-zinc-400">
            {parse(body)}
          </div>
          <div className="mt-auto text-xs text-zinc-700 dark:text-zinc-500 flex items-center gap-2">
            <span>{date}</span>
            <span>.</span>
            <span>{time}</span>
          </div>
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
          onClick={() => {
            navigate(`/text-editor/${title}`);
          }}
        >
          <CiPen className="w-4 h-4" />
          <span>Edit</span>
        </ContextMenuItem>

        <ContextMenuItem
          className="flex items-center gap-2"
          // onClick={() => {
          //   navigate(`/text-editor/${title}`);
          // }}
        >
          <MdOutlineDriveFileMove className="w-4 h-4" />
          <span>move</span>
        </ContextMenuItem>

        <ContextMenuItem
          className="flex items-center gap-2 text-red-500"
          onClick={handleDeleteNote}
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

export default NoteCard;
