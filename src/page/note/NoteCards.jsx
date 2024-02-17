import NoteCard from "./NoteCard";
import { useSelector } from "react-redux";
import { Folder } from "@/components/index.components";

const NoteCards = () => {
  const { allDocs } = useSelector((store) => store.folders);

  return (
    <div className="notes overflow-auto pb-4">
      {allDocs.length
        ? allDocs.map((doc) => {
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
          })
        : "you have not any note"}
    </div>
  );
};

export default NoteCards;
