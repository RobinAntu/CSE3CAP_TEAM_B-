 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/src/App.jsx b/src/App.jsx
index 108489a6465f883fc5d680b38c6c39b619b202f6..eddbe213e1bd8a68f4ea5c6a046086b67e6c5a02 100644
--- a/src/App.jsx
+++ b/src/App.jsx
@@ -1,41 +1,91 @@
 import React from "react";
 import { Routes, Route, Navigate } from "react-router-dom";
-import { AuthProvider } from "./context/AuthContext";
-import Login from "./auth/Login";
-import Register from "./auth/Register";
+import { AuthProvider } from "./auth/AuthContext";
 import RequireAuth from "./auth/RequireAuth";
 import Page from "./components/layout/Page";
-import Dashboard from "./components/dashboard/Dashboard";
-import SettingsPage from "./components/settings/SettingsPage";
+import Login from "./pages/Login";
+import Signup from "./pages/Signup";
+import Dashboard from "./pages/Dashboard";
+import Settings from "./pages/Settings";
+import WizardStep1 from "./pages/WizardStep1";
+import WizardStep2 from "./pages/WizardStep2";
+import WizardStep3 from "./pages/WizardStep3";
+import TaskDetails from "./pages/TaskDetails";
+import { useAuth } from "./auth/AuthContext";
+
+function DefaultRoute() {
+  const { user } = useAuth();
+  return <Navigate to={user ? "/dashboard" : "/login"} replace />;
+}
 
 export default function App() {
   return (
     <AuthProvider>
       <Routes>
         <Route path="/login" element={<Login />} />
-        <Route path="/register" element={<Register />} />
+        <Route path="/signup" element={<Signup />} />
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
-                <SettingsPage />
+                <Settings />
+              </Page>
+            </RequireAuth>
+          }
+        />
+        <Route
+          path="/wizard/1"
+          element={
+            <RequireAuth>
+              <Page>
+                <WizardStep1 />
+              </Page>
+            </RequireAuth>
+          }
+        />
+        <Route
+          path="/wizard/2"
+          element={
+            <RequireAuth>
+              <Page>
+                <WizardStep2 />
+              </Page>
+            </RequireAuth>
+          }
+        />
+        <Route
+          path="/wizard/3"
+          element={
+            <RequireAuth>
+              <Page>
+                <WizardStep3 />
+              </Page>
+            </RequireAuth>
+          }
+        />
+        <Route
+          path="/task/:id"
+          element={
+            <RequireAuth>
+              <Page>
+                <TaskDetails />
               </Page>
             </RequireAuth>
           }
         />
-        <Route path="/" element={<Navigate to="/dashboard" replace />} />
+        <Route path="/" element={<DefaultRoute />} />
       </Routes>
     </AuthProvider>
   );
 }
 
EOF
)
