import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toggle } from "@/features/pageSlice";
import { FileIcon } from "@radix-ui/react-icons";
import React, { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Iframe } from "@/components/index.components";

const IndividualNote = () => {
  const [note, setNote] = useState({});
  const { body, $updatedAt } = note;
  const { notes } = useSelector((store) => store.notes);
  const { toggleObj } = useSelector((store) => store.page);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { title } = useParams();

  const handleToggle = () => {
    dispatch(
      toggle({ individualNotePageAside: !toggleObj.individualNotePageAside })
    );
  };

  useEffect(() => {
    setNote(notes.find((note) => note.title === title));
  }, [notes.length, title]);

  return (
    <div className="border w-full h-full bg-[#EEEEEE] fixed top-0 left-0 z-40">
      {/* <Nav openEditor={true} /> */}
      <div className="flex h-full">
        <aside
          className={`w-[250px] h-full bg-white flex p-2 flex-col border-r border-black gap-2 fixed md:relative ${
            toggleObj.individualNotePageAside
              ? "translate-x-0"
              : "-translate-x-[100%]"
          } md:translate-x-0 z-10`}
        >
          <h2 className="text-center text-xl md:py-4 pt-[3px] pl-[46px] md:pl-0">
            Your documents
          </h2>
          <Input type="search" placeholder="search your docs" />
          <h4>root dir</h4>
          <div className="flex-1 overflow-auto pb-10">
            {notes.map(({ title, body }) => (
              <NavLink
                key={title}
                to={`/notes/${title}`}
                className={({ isActive }) =>
                  isActive
                    ? "flex mb-2 items-center border border-zinc-700 rounded bg-zinc-100"
                    : "border flex mb-2 items-center border-zinc-400 rounded hover:bg-zinc-100"
                }
              >
                <div className="flex items-center gap-1 p-2">
                  <FileIcon />
                  <div>
                    <p className="text-sm">{title}</p>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </aside>
        {/* note content */}
        <div className="flex-1 w-full h-full bg-[#eee] flex flex-col">
          <div className="note-head w-full border-b px-4 py-2 bg-white text-center">
            <h1 className="text-lg">{note.title}</h1>
            <div className="text-xs text-zinc-700">
              <span>02/02/2024</span>.<span>09:00 am</span>
            </div>
          </div>
          <div className="w-full max-w-[700px] h-full flex-1 border mx-auto overflow-auto bg-white">
            {body && <Iframe noteBody={body} $updatedAt={$updatedAt} />}
            {/* <p className="text-xs py-3">{getDate($updatedAt).fullDate}</p> */}
          </div>
          <Button
            variant="outline"
            onClick={handleToggle}
            className="absolute top-2 left-4 z-10 rounded-full w-8 h-8 p-0 flex md:hidden"
          >
            <CiMenuBurger />
          </Button>
          {/* text editor close button */}
          <Button
            variant="outline"
            onClick={() => navigate("/notes")}
            className="absolute top-2 right-2 z-10 rounded-full w-8 h-8 p-0"
          >
            <IoCloseSharp />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IndividualNote;
