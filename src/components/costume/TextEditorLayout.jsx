import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TextEditorLayout = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/text-editor/new");
  }, []);
  return <>{children}</>;
};

export default TextEditorLayout;
