import React from "react";

export default function Checkbox({ className = "", ...props }) {
  return (
    <input
      type="checkbox"
      className={`h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500/40 ${className}`}
      {...props}
    />
  );
}
