import { Pencil1Icon } from "@radix-ui/react-icons";
import React from "react";
import { Button } from "../../ui/button";
import { useNavigate } from "react-router-dom";

const CreateNoteBtn = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="outline"
      className="rounded-full p-0 w-16 h-16 fixed z-10 right-5 bottom-5 shadow-lg max-[400px]:hidden"
      onClick={() => navigate("/text-editor")}
    >
      <Pencil1Icon className="w-8 h-8" />
    </Button>
  );
};

export default CreateNoteBtn;
