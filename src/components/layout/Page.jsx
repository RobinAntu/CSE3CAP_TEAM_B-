import React from "react";
import Navbar from "./Navbar";

export default function Page({ children }) {
  return (
    <div className="min-h-full flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50">{children}</main>
    </div>
  );
}
