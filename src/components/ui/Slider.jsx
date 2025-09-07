import React from "react";

export default function Slider({ className = "", ...props }) {
  return (
    <input
      type="range"
      className={`w-full h-2 rounded-lg bg-gray-200 accent-blue-600 ${className}`}
      {...props}
    />
  );
}
