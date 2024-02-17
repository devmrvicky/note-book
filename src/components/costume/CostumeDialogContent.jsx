import React from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

const CostumeDialogContent = ({ children, dialogTitle, dialogDescription }) => {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogDescription>{dialogDescription}</DialogDescription>
      </DialogHeader>
      {children}
    </DialogContent>
  );
};

export default CostumeDialogContent;
