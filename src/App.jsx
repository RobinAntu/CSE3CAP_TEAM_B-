import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import RequireAuth from "./auth/RequireAuth";
import Page from "./components/layout/Page";
import { AppProvider } from "./context/AppContext";
import { useAuth } from "./auth/AuthContext";

const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const VerifyEmail = lazy(() => import("./pages/VerifyEmail"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));
const WizardStep1 = lazy(() => import("./pages/WizardStep1"));
const WizardStep2 = lazy(() => import("./pages/WizardStep2"));
const WizardStep3 = lazy(() => import("./pages/WizardStep3"));
const TaskDetails = lazy(() => import("./pages/TaskDetails"));
const EditTask = lazy(() => import("./pages/EditTask.jsx"));
const Schedule = lazy(() => import("./pages/Schedule"));
const Progress = lazy(() => import("./pages/progress/Progress"));

function DefaultRoute() {
  const { user } = useAuth();
  return <Navigate to={user ? "/dashboard" : "/login"} replace />;
}

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Page>
                    <Dashboard />
                  </Page>
                </RequireAuth>
              }
            />
            <Route
              path="/settings"
              element={
                <RequireAuth>
                  <Page>
                    <Settings />
                  </Page>
                </RequireAuth>
              }
            />
            <Route
              path="/schedule"
              element={
                <RequireAuth>
                  <Page>
                    <Schedule />
                  </Page>
                </RequireAuth>
              }
            />
            <Route
              path="/progress"
              element={
                <RequireAuth>
                  <Page>
                    <Progress />
                  </Page>
                </RequireAuth>
              }
            />
            <Route
              path="/wizard/1"
              element={
                <RequireAuth>
                  <Page>
                    <WizardStep1 />
                  </Page>
                </RequireAuth>
              }
            />
            <Route
              path="/wizard/2"
              element={
                <RequireAuth>
                  <Page>
                    <WizardStep2 />
                  </Page>
                </RequireAuth>
              }
            />
            <Route
              path="/wizard/3"
              element={
                <RequireAuth>
                  <Page>
                    <WizardStep3 />
                  </Page>
                </RequireAuth>
              }
            />
            <Route
              path="/task/:id"
              element={
                <RequireAuth>
                  <Page>
                    <TaskDetails />
                  </Page>
                </RequireAuth>
              }
            />
            <Route
              path="/task/edit/:id"
              element={
                <RequireAuth>
                  <Page>
                    <EditTask />
                  </Page>
                </RequireAuth>
              }
            />
            <Route path="/" element={<DefaultRoute />} />
          </Routes>
        </Suspense>
      </AppProvider>
    </AuthProvider>
  );
}

export default App;
