import { Home, LandingPage } from "@/page/index.page";
import { useSelector } from "react-redux";

const HomeRoute = () => {
  const { status } = useSelector((store) => store.auth);

  return status ? <Home /> : <LandingPage />;
};

export default HomeRoute;
