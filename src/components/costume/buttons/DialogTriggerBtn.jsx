import { DialogTrigger } from "@radix-ui/react-dialog";
import React from "react";

const DialogTriggerBtn = ({
  children,
  triggerClass = "absolute bottom-4 left-[50%] -translate-x-[50%] w-[90%]",
}) => {
  return (
    <DialogTrigger asChild className={`${triggerClass}`}>
      {/* <Button onClick={onClick}>Save</Button> */}
      {children}
    </DialogTrigger>
  );
};

export default DialogTriggerBtn;
