import React, { useEffect } from "react";
import DevNav from "./DevNav";
import DevAside from "./DevAside";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Dev = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/dev/requests/bug-fix-request");
  }, []);
  return (
    <div className="w-full h-full">
      <DevNav />
      <DevAside />
      <Outlet />
    </div>
  );
};

export default Dev;
