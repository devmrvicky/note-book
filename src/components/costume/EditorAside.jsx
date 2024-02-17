import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FileIcon, PlusIcon, ReloadIcon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { toggle } from "@/features/pageSlice";
import { addNote, setCurrentNoteTitle } from "@/features/noteSlice";
import Note from "@/obj-classes/createNote";
import dbService from "@/appwrite/databaseService";
import SetNoteTitleBtn from "./buttons/SetNoteTitleBtn";
import removeDollarSign from "@/methods/removeDollarSign";
import { updateCurrentDir } from "@/features/folderSlice";
import env from "@/env/env";

const EditorAside = ({ handleSaveNote, loading }) => {
  const [creating, setCreating] = useState(false);
  const [currentDirNotes, setCurrentDirNotes] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [value, setValue] = useState("");
  const { notes, currentNoteTitle } = useSelector((store) => store.notes);
  const { toggleObj } = useSelector((store) => store.page);
  const { currentDir } = useSelector((store) => store.folders);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputSearch = (e) => {
    setCurrentDirNotes(
      notes.filter((note) => note.title.includes(e.target.value))
    );
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setCreating(true);
      dispatch(setCurrentNoteTitle(newTitle));
      const newNote = new Note(newTitle, "", "", "");
      const note = await dbService.createDocument(newNote);
      if (note) {
        const prepareData = removeDollarSign(currentDir);
        // console.log(prepareData);
        const updatedCurrentDir = await dbService.updateNote(
          currentDir.$id,
          { ...prepareData, ids: [...prepareData.ids, note.$id] },
          env.appwriteFolderCollectionId
        );
        dispatch(updateCurrentDir(updatedCurrentDir));
        dispatch(addNote({ ...note }));
        navigate(`/text-editor/${newTitle}`);
        dispatch(toggle({ newDocsTitleInput: false }));
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setCreating(false);
    }
  };

  useEffect(() => {
    setCurrentDirNotes(notes);
  }, [notes.length]);

  return (
    <aside
      className={`w-[250px] h-full dark:bg-black bg-[#EEEEEE] flex p-2 flex-col border-r border-black dark:border-white gap-2 fixed md:relative ${
        toggleObj.editorAside ? "translate-x-0" : "-translate-x-[100%]"
      } md:translate-x-0 z-10`}
    >
      <h2 className="text-center text-xl md:py-4 pt-[3px] pl-[46px] dark:text-white">
        Your documents
      </h2>
      <Input
        type="search"
        placeholder="Search you docs"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onInput={handleInputSearch}
      />
      <Button
        variant="outline"
        onClick={() => dispatch(toggle({ newDocsTitleInput: true }))}
        className="dark:bg-white dark:text-black"
      >
        <PlusIcon className="mr-3" />
        <span>New document</span>
      </Button>
      {toggleObj.newDocsTitleInput && (
        <form onSubmit={handleSubmit} className="flex-1 overflow-auto pb-10">
          <Label htmlFor="newTitle">New Docs</Label>
          <Input
            type="text"
            id="newTitle"
            placeholder="enter title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onBlur={() => dispatch(toggle({ newDocsTitleInput: false }))}
            disabled={creating}
          />
        </form>
      )}
      {/* documents */}
      <div className="before:content-['Documents'] before:text-sm flex-1 overflow-auto pb-10">
        {currentDirNotes.length ? (
          currentDirNotes.map(({ title, body }) => (
            <NavLink
              key={title}
              to={`/text-editor/${title}`}
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
                  {/* <p className="text-sm text-zinc-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            incidunt.
          </p> */}
                </div>
              </div>
            </NavLink>
          ))
        ) : (
          <div className="text-xs text-center py-3 w-full text-zinc-800">
            you have no any docs.
          </div>
        )}
      </div>
      {!currentNoteTitle ? (
        <>
          {/* <DialogBox handleSaveNote={handleSaveNote} /> */}
          <SetNoteTitleBtn handleSaveNote={handleSaveNote} />
        </>
      ) : !loading ? (
        <Button onClick={handleSaveNote}>Save</Button>
      ) : (
        <Button disabled>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      )}
    </aside>
  );
};

export default EditorAside;
