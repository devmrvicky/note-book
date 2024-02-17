import React from "react";
import { FlexBox } from "../util/index.util";
import getDate from "@/methods/getdate";

const Date = () => {
  const date = getDate();
  return (
    <FlexBox direction="flex-col" className="text-white" gap="gap-0">
      <div>{date.fullDate}</div>
      <div className="text-2xl max-[400px]:hidden">09:00 am</div>
    </FlexBox>
  );
};

export default Date;
