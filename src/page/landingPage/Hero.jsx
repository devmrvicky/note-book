import { appPrevImg } from "@/assets/index.assets";
import { Button } from "@/components/ui/button";
import { FlexBox, SectionContainer } from "@/components/util/index.util";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <SectionContainer className="py-4" maxWidth="lg:max-w-7xl max-w-xl">
      <FlexBox direction="flex-col lg:flex-row" gap="gap-8 lg:gap-3">
        <div className="flex-1 py-5 lg:pr-5">
          <h1 className="max-[500px]:text-center">
            <span className="text-4xl max-[500px]:text-3xl">Welcome to</span>
            <br />
            <span className="text-6xl max-[500px]:text-5xl">
              Your Note Book
            </span>
          </h1>
          <p className="py-2 text-zinc-500">
            "Unleash Your Thoughts: Your Personal Notebook. Capture ideas,
            dreams, and reflections with simplicity and style. Your space, your
            story—start writing today!"
          </p>
          <Button
            variant="link"
            className="text-sm"
            onClick={() => navigate("/user/signup")}
          >
            Get started
            <ArrowRightIcon className="pl-2 w-6 h-6" />
          </Button>
        </div>
        <div className="flex-1">
          <img
            src={appPrevImg}
            alt="app-preview-img"
            className="border shadow"
          />
        </div>
      </FlexBox>
    </SectionContainer>
  );
};

export default Hero;
