import authService from "@/appwrite/authService";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import React, { useEffect, useState } from "react";
import { VscLoading } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const DevLayout = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const userPref = await authService.getUserPrefs();
        if (userPref?.userRoll === "dev") {
          console.log("Welcome dev");
        } else {
          setShowAlert(true);
          navigate("/");
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return (
    <div className="fixed z-40 bg-white dark:bg-black top-0 left-0 w-full h-full">
      {/* <Button variant="" onClick={() => navigate("/")}>
        <ArrowLeftIcon />
      </Button> */}
      {loading ? (
        <div className="w-full flex items-center justify-center h-full">
          <VscLoading className="w-10 h-10 animate-spin" />
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default DevLayout;
