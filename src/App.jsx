import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import authService from "./appwrite/authService";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./features/authSlice";
import CreateNoteBtn from "@/components/costume/buttons/CreateNoteBtn";
import {
  Aside,
  FolderNav,
  Header,
  Nav,
  ThemeProvider,
} from "@/components/index.components";
import { FlexBox } from "@/components/util/index.util";
import { LoadingPage } from "./page/index.page";
import Footer from "./page/landingPage/Footer";
import dbService from "./appwrite/databaseService";
import { getAllNotes } from "./features/noteSlice";
import { changeInitializingText } from "./features/pageSlice";
import env from "./env/env";
import { changeCurrentDir, getAllFolders } from "./features/folderSlice";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { status } = useSelector((store) => store.auth);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        dispatch(changeInitializingText("checking user authentication ..."));
        // check user authentication
        const user = await authService.getUser();
        // if user got then login otherwise logout
        if (user) {
          dispatch(login(user));
        } else {
          dispatch(logout());
          return;
        }

        dispatch(changeInitializingText("getting data ..."));

        // get user note
        const userNotes = await dbService.getDocsByAuthId(user);
        // console.log(userNotes);
        if (userNotes) {
          dispatch(getAllNotes(userNotes.documents));
        }
        // get user folder
        const userFolder = await dbService.getDocsByAuthId(
          user,
          env.appwriteFolderCollectionId
        );
        if (userFolder.documents.length) {
          dispatch(getAllFolders(userFolder.documents));
          // console.log(userFolder.documents.find((folder) => folder.rootFolder));
          dispatch(
            changeCurrentDir(
              userFolder.documents.find((folder) => folder.rootFolder)
            )
          );
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
        dispatch(changeInitializingText(""));
      }
    })();
  }, [status]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {status ? (
        !loading ? (
          <FlexBox
            gap="gap-0"
            justifyItems="justify-start"
            alignItems="items-start"
          >
            <Aside />
            <div className="flex-1 h-screen relative ml-16 md:ml-60 max-[400px]:ml-0">
              <Header />
              <FolderNav />
              <CreateNoteBtn />
              <Outlet />
            </div>
          </FlexBox>
        ) : (
          <LoadingPage />
        )
      ) : (
        <>
          <Nav />
          <Outlet />
          <Footer />
        </>
      )}
      <SpeedInsights />
    </ThemeProvider>
  );
}

export default App;
