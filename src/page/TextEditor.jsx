import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "@/components/ui/button";
import { EditorAside } from "@/components/index.components";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import env from "@/env/env";
import { useDispatch, useSelector } from "react-redux";
import Note from "@/obj-classes/createNote";
import {
  setCurrentNote,
  setCurrentNoteTitle,
  updateNote,
} from "@/features/noteSlice";
import { CiMenuBurger } from "react-icons/ci";
import { toggle } from "@/features/pageSlice";
import dbService from "@/appwrite/databaseService";
import removeDollarSign from "@/methods/removeDollarSign";
import useSave from "@/methods/useSave";
import useUpdateData from "@/methods/useUpdateData";

const TextEditor = () => {
  const [loading, setLoading] = useState(false);
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const editorRef = useRef(null);
  const { name, $id } = useSelector((store) => store.auth.userData);
  const { toggleObj } = useSelector((store) => store.page);
  const { notes, currentNoteTitle } = useSelector((store) => store.notes);
  const { currentDir } = useSelector((store) => store.folders);

  const { title } = useParams();

  const handleSaveNote = async () => {
    try {
      if (editorRef.current) {
        setLoading(true);
        const noteContent = editorRef.current.getContent();
        const noteObj = new Note(currentNoteTitle, noteContent, name, $id);
        dispatch(setCurrentNote({ ...noteObj }));
        // if note has title then perform save note function here. Not need to pass control in dialog box to set title
        if (currentNoteTitle) {
          const note = notes.find((note) => note.title === currentNoteTitle);
          if (note) {
            // update note
            await useUpdateData(note, noteObj, dispatch);
          } else {
            // create note
            await useSave("note", noteObj, currentDir, dispatch);
          }
          navigate(`/notes/${currentNoteTitle}`);
          dispatch(setCurrentNoteTitle(""));
        }
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  // toggle function
  const handleToggle = () => {
    dispatch(toggle({ editorAside: !toggleObj.editorAside }));
  };

  useEffect(() => {
    if (title) {
      const activeNote = notes.find((note) => note.title === title);
      dispatch(setCurrentNoteTitle(title));
      setBody(activeNote.body);
    }
  }, [title]);

  return (
    <div className="border w-full h-full bg-[#EEEEEE] fixed top-0 left-0 z-40">
      {/* <Nav openEditor={true} /> */}
      <div className="flex h-full">
        <EditorAside handleSaveNote={handleSaveNote} loading={loading} />
        <div id="text-editor" className=" h-full mx-auto flex-1 relative">
          <Editor
            apiKey={env.textEditorApi}
            onInit={(evt, editor) => (editorRef.current = editor)}
            onChange={(e) => {
              console.log(e);
            }}
            initialValue={body}
            init={{
              height: 580,
              menubar: true,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px,}",
            }}
          />
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
            onClick={() => navigate("/")}
            className="absolute top-2 right-2 z-10 rounded-full w-8 h-8 p-0"
          >
            <IoCloseSharp />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
