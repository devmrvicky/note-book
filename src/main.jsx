import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import {
  Docs,
  ErrorPage,
  IndividualNote,
  LoginForm,
  Note,
  SignupForm,
  TextEditor,
} from "./page/index.page.js";
import { Provider } from "react-redux";
import store from "./store/store.js";
import Dashboard from "./page/Dashboard.jsx";
import {
  HomeRoute,
  IndividualNotePageError,
  TextEditorLayout,
} from "./components/index.components.js";
import AuthLayout from "./components/costume/AuthLayout.jsx";

// Routers
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
      <Route
        path="/notes/:title"
        element={
          <AuthLayout authentication={true}>
            <IndividualNotePageError>
              <IndividualNote />
            </IndividualNotePageError>
          </AuthLayout>
        }
      />
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
      <Route
        path="/docs"
        element={
          <AuthLayout authentication={true}>
            <Docs />
          </AuthLayout>
        }
      />
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
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);