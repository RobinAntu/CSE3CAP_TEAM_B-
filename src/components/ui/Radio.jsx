import React from "react";

export default function Radio({ className = "", ...props }) {
  return (
    <input
      type="radio"
      className={`h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500/40 ${className}`}
      {...props}
    />
  );
}
