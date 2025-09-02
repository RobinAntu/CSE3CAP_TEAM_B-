import React from "react";
 import { Link } from "react-router-dom";
+import { BellIcon } from "@heroicons/react/24/outline";
+import Input from "../ui/Input";
+import IconButton from "../ui/IconButton";
 
 export default function Navbar() {
+    <nav className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-2">
+      <div className="flex items-center space-x-8">
+        <Link to="/dashboard" className="text-2xl font-semibold text-[#2563eb]">
+          Study Flex
+        </Link>
+        <div className="hidden md:flex items-center space-x-4 text-sm text-gray-600">
+          <Link to="/dashboard" className="hover:text-gray-900">Home</Link>
+          <Link to="#" className="hover:text-gray-900">Schedule</Link>
+          <Link to="/wizard/1" className="hover:text-gray-900">Input Wizard</Link>
+          <Link to="/settings" className="hover:text-gray-900">Settings</Link>
+        </div>
+      </div>
+      <div className="flex items-center space-x-2">
+        <Input type="search" placeholder="Search" className="hidden md:block w-48 shadow-sm" />
+        <IconButton aria-label="notifications">
+          <BellIcon className="h-5 w-5" />
+        </IconButton>
+        <img src="/src/assets/logo.jpg" alt="avatar" className="h-8 w-8 rounded-full" />
       </div>
     </nav>
   );
 }
 
EOF
)
