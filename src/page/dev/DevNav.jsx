import { ModeToggle } from "@/components/costume/theme/ModeToggle";
import { Button } from "@/components/ui/button";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const DevNav = () => {
  return (
    <nav className="flex items-center w-full px-3 py-2 pl-[100px] border">
      <Button variant="outline">
        <RxHamburgerMenu className="w-5 h-5" />
      </Button>
      <div className="pl-5">
        <p className="text-2xl">Welcome, Vicky K.</p>
        <span>Greeting vicky</span>
      </div>
      <div className="ml-auto">
        {/* <Button variant="outline">
          <CiSearch className="w-5 h-5" />
        </Button>
        <Button variant="outline">
          <IoIosNotificationsOutline className="w-5 h-5" />
        </Button> */}
        <ModeToggle />
      </div>
    </nav>
  );
};

export default DevNav;
