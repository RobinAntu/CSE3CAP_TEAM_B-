import React from "react";

export default function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={`w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500/40 focus:outline-none ${className}`}
      {...props}
    />
  );
}
