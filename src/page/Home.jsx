import { changeCurrentPage } from "@/features/pageSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { status } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!status) {
      navigate();
    }
    dispatch(changeCurrentPage("Home"));
  }, []);
  return (
    <div className="text-xs text-center py-3 w-full text-zinc-800 dark:text-white">
      There is not available content. <br /> This page is under construction.
    </div>
  );
};

export default Home;
