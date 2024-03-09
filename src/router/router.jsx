import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import {
  Dev,
  DevBugRequests,
  DevLayout,
  DevRequests,
  Docs,
  ErrorPage,
  FeatureSuggest,
  IndividualNote,
  LoginForm,
  Note,
  PageNotFound,
  ReportBug,
  SignupForm,
  Tasks,
  TextEditor,
} from "../page/index.page.js";
import Dashboard from "../page/Dashboard.jsx";
import {
  HomeRoute,
  IndividualNotePageError,
  TextEditorLayout,
} from "../components/index.components.js";
import AuthLayout from "../components/costume/AuthLayout.jsx";
import App from "@/App.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route path="" element={<HomeRoute />} />
      <Route
        path="/dashboard"
        element={
          <AuthLayout authentication={true}>
            <Dashboard />
          </AuthLayout>
        }
      />
      <Route
        path="/notes"
        element={
          <AuthLayout authentication={true}>
            <Note />
          </AuthLayout>
        }
      />
      {/* <Route
        path="/notes?note=:title"
        element={
          <AuthLayout authentication={true}>
            <IndividualNotePageError>
              <IndividualNote />
            </IndividualNotePageError>
          </AuthLayout>
        }
      /> */}
      <Route
        path="/text-editor"
        element={
          <AuthLayout authentication={true}>
            <TextEditorLayout>
              <TextEditor />
            </TextEditorLayout>
          </AuthLayout>
        }
      />
      <Route
        path="/text-editor/new"
        element={
          <AuthLayout authentication={true}>
            <TextEditor />
          </AuthLayout>
        }
      />
      <Route
        path="/text-editor/:title"
        element={
          <AuthLayout authentication={true}>
            <TextEditor />
          </AuthLayout>
        }
      />
      {/* tasks route */}
      <Route
        path="/tasks"
        element={
          <AuthLayout authentication={true}>
            <Tasks />
          </AuthLayout>
        }
      ></Route>
      {/* docs */}
      <Route
        path="/docs"
        element={
          <AuthLayout authentication={true}>
            <Docs />
          </AuthLayout>
        }
      />
      <Route
        path="/report-bug"
        element={
          <AuthLayout authentication={true}>
            <ReportBug />
          </AuthLayout>
        }
      />
      <Route
        path="/feature-suggest"
        element={
          <AuthLayout authentication={true}>
            <FeatureSuggest />
          </AuthLayout>
        }
      />
      <Route
        path="/dev"
        element={
          <AuthLayout authentication={true}>
            <DevLayout>
              <Dev />
            </DevLayout>
          </AuthLayout>
        }
      >
        <Route
          path="/dev/requests"
          element={
            <AuthLayout authentication={true}>
              <DevRequests />
            </AuthLayout>
          }
        >
          <Route
            path="/dev/requests/bug-fix-request"
            element={
              <AuthLayout authentication={true}>
                <DevBugRequests />
              </AuthLayout>
            }
          />
        </Route>
      </Route>

      <Route
        path="user/signup"
        element={
          <AuthLayout authentication={false}>
            <SignupForm />
          </AuthLayout>
        }
      />
      <Route
        path="user/Login"
        element={
          <AuthLayout authentication={false}>
            <LoginForm />
          </AuthLayout>
        }
      />
      {/* page not found */}
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

export default router;
