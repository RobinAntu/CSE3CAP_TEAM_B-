import React from "react";
import Navbar from "./Navbar";
+import Sidebar from "./Sidebar";
+import Footer from "./Footer";
 
 export default function Page({ children }) {
   return (
+    <div className="flex min-h-screen flex-col bg-[#f9fafb]">
       <Navbar />
+      <div className="flex flex-1">
+        <Sidebar />
+        <main className="flex-1 p-6">
+          <div className="mx-auto max-w-6xl space-y-8">{children}</div>
+        </main>
+      </div>
+      <Footer />
     </div>
   );
 }
