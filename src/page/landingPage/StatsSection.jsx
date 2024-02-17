import { activeUserImg } from "@/assets/index.assets";
import { FlexBox, SectionContainer } from "@/components/util/index.util";
import React from "react";

const StatsSection = () => {
  return (
    <SectionContainer>
      <h2 className="text-center text-3xl py-3">Our stats</h2>
      <FlexBox justifyItems="justify-evenly" className="py-3">
        <FlexBox direction="flex-col" className="border rounded w-[200px] pb-3">
          <img src={activeUserImg} width={100} alt="active-user" />
          <p>Active users</p>
          <p>200+</p>
        </FlexBox>
        <FlexBox direction="flex-col" className="border rounded w-[200px] pb-3">
          <img src={activeUserImg} width={100} alt="active-user" />
          <p>Active users</p>
          <p>200+</p>
        </FlexBox>
        <FlexBox direction="flex-col" className="border rounded w-[200px] pb-3">
          <img src={activeUserImg} width={100} alt="active-user" />
          <p>Active users</p>
          <p>200+</p>
        </FlexBox>
      </FlexBox>
    </SectionContainer>
  );
};

export default StatsSection;
