import NoteCard from "./NoteCard";
import { useSelector } from "react-redux";
import { Folder } from "@/components/index.components";
import parse from "html-react-parser";

const NoteCards = ({ filterValue }) => {
  const { allDocs } = useSelector((store) => store.folders);
  return (
    <div className="notes overflow-auto pb-4">
      {allDocs.length
        ? allDocs.map((doc) => {
            if (filterValue === "all" || !filterValue) {
              return (
                <div key={doc.$id} className="cursor-pointer" draggable>
                  {doc.flag !== "folder" ? (
                    <NoteCard
                      title={doc.title}
                      body={doc.body}
                      color={doc.color}
                      $id={doc.$id}
                      $updatedAt={doc.$updatedAt}
                    />
                  ) : (
                    <Folder folderName={doc.folderName} $id={doc.$id} />
                  )}
                </div>
              );
            } else if (filterValue === "draft") {
              return (
                <div
                  key={doc.id}
                  className="border rounded p-3 bg-white dark:bg-zinc-500"
                >
                  {parse(doc.body)}
                </div>
              );
            }
          })
        : "you have not any note"}
    </div>
  );
};

export default NoteCards;
