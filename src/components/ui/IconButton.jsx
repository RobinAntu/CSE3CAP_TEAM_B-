import React from "react";

export default function IconButton({ className = "", ...props }) {
  return (
    <button
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/40 ${className}`}
      {...props}
    />
  );
}
