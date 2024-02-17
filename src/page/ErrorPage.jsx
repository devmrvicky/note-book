import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>this page has not found.</div>
      <Button onClick={() => navigate("/")}>Go to home</Button>
    </div>
  );
};

export default ErrorPage;
