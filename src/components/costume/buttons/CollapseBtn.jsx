import React from "react";
import { Button } from "../../ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

const CollapseBtn = () => {
  return (
    <Button
      variant="outline"
      className="rounded-full absolute w-10 h-10 p-0 -right-7"
    >
      <ArrowLeftIcon className="w-full" />
    </Button>
  );
};

export default CollapseBtn;
