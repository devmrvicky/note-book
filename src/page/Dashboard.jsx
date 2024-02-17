import { changeCurrentPage } from "@/features/pageSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeCurrentPage("Note"));
  }, []);
  return <div>Dashboard</div>;
};

export default Dashboard;
