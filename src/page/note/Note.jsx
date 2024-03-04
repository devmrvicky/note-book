import { changeCurrentPage } from "@/features/pageSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NoteCards from "./NoteCards";
import { changeCurrentDir, getAllDocs } from "@/features/folderSlice";
import { useLocation, useNavigate } from "react-router-dom";

const Note = () => {
  const [filterValue, setFilterValue] = useState();
  const dispatch = useDispatch();
  const { notes, notesInDraft } = useSelector((store) => store.notes);
  const { folders, currentDirName } = useSelector((store) => store.folders);

  const location = useLocation();
  const navigate = useNavigate();

  const showAllNotes = () => {
    const openFolder = folders.find(
      (folder) => folder.folderName === currentDirName
    );
    dispatch(changeCurrentDir(openFolder));
    console.log("it will run when length of notes and folders will change ");
    const allDocs = [];
    if (openFolder.ids) {
      for (let id of openFolder.ids) {
        for (let doc of [...notes, ...folders]) {
          if (doc.$id === id) {
            allDocs.push(doc);
          }
        }
      }
    }
    dispatch(getAllDocs(allDocs));
  };

  useEffect(() => {
    dispatch(changeCurrentPage("Note"));
    // select note on the basis of selected by user (all notes or draft note)
    const notesFilter = new URLSearchParams(location.search);
    const filter = notesFilter.get("filter");
    setFilterValue(filter);
    showAllNotes();
    if (!filter) {
      console.log("called");
      showAllNotes();
    }
    if (filter === "draft") {
      dispatch(getAllDocs(notesInDraft));
    } else if (filter === "all") {
      showAllNotes();
    } else {
      showAllNotes();
    }
  }, [notes.length, folders.length, currentDirName, location.search]);

  return (
    <div className="pb-14 px-5 py-5 flex flex-col gap-2 max-[588px]:max-w-[300px] max-[588px]:mx-auto">
      {/* <h1>Notes</h1> */}
      {!notes.length && (
        <div className="text-xs text-center py-3 w-full text-zinc-800">
          you have not created any note. For creating note <br />
          please click on pen button
        </div>
      )}
      <NoteCards filterValue={filterValue} />
    </div>
  );
};

export default Note;
