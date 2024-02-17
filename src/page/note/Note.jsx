import { changeCurrentPage } from "@/features/pageSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NoteCards from "./NoteCards";
import { changeCurrentDir, getAllDocs } from "@/features/folderSlice";

const Note = () => {
  const dispatch = useDispatch();
  const { notes } = useSelector((store) => store.notes);
  const { folders, currentDirName } = useSelector(
    (store) => store.folders
  );

  useEffect(() => {
    dispatch(changeCurrentPage("Note"));
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
  }, [
    notes.length,
    folders.length,
    currentDirName,
  ]);

  return (
    <div className="pb-14 px-5 py-5 flex flex-col gap-2 max-[588px]:max-w-[300px] max-[588px]:mx-auto">
      {/* <h1>Notes</h1> */}
      {!notes.length && (
        <div className="text-xs text-center py-3 w-full text-zinc-800">
          you have not created any note. For creating note <br />
          please click on pen button
        </div>
      )}
      <NoteCards />
    </div>
  );
};

export default Note;
