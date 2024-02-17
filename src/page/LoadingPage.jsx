import { InitElem, Logo } from "@/components/index.components";
import React from "react";
import { useSelector } from "react-redux";

const LoadingPage = () => {
  const { initializingText } = useSelector((store) => store.page);
  return (
    <div className="w-full h-screen relative flex items-center justify-center">
      <div className="flex items-center justify-center flex-col gap-4 max-w-[300px] w-full">
        <Logo className="hidden" />
        <InitElem initializingText={initializingText} className="animate-spin"/>
      </div>
    </div>
  );
};

export default LoadingPage;
