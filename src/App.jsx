import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import RequireAuth from "./auth/RequireAuth";
import Page from "./components/layout/Page";
import { AppProvider } from "./context/AppContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import WizardStep1 from "./pages/WizardStep1";
import WizardStep2 from "./pages/WizardStep2";
import WizardStep3 from "./pages/WizardStep3";
import TaskDetails from "./pages/TaskDetails";
import { useAuth } from "./auth/AuthContext";

function DefaultRoute() {
  const { user } = useAuth();
  return <Navigate to={user ? "/dashboard" : "/login"} replace />;
}

export default function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
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
        <Route path="/" element={<DefaultRoute />} />
        </Routes>
      </AppProvider>
    </AuthProvider>
  );
}
