diff --git a/src/auth/RequireAuth.jsx b/src/auth/RequireAuth.jsx
index a925263f32d226b80e17eaf274c4b2d6bcd56d53..d935dbae197b9eae9e6ce4a0eb45e7a97254cad3 100644
--- a/src/auth/RequireAuth.jsx
+++ b/src/auth/RequireAuth.jsx
@@ -1,12 +1,12 @@
 import React from "react";
 import { Navigate, useLocation } from "react-router-dom";
-import { useAuth } from "../context/AuthContext";
+import { useAuth } from "./AuthContext";
 
 export default function RequireAuth({ children }) {
   const { user } = useAuth();
   const location = useLocation();
   if (!user) {
     return <Navigate to="/login" state={{ from: location }} replace />;
   }
   return children;
 }
