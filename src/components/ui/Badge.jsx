import React from "react";

export default function Badge({ color = "gray", children, className = "" }) {
  const colors = {
    red: "bg-red-100 text-red-700",
    yellow: "bg-yellow-100 text-yellow-700",
    green: "bg-green-100 text-green-700",
    gray: "bg-gray-100 text-gray-700",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${colors[color]} ${className}`}>
      {children}
    </span>
  );
}
