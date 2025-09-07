import React from "react";

export default function Button({
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
    secondary: "bg-pink-600 text-white hover:bg-pink-700 focus:ring-pink-500",
    outline: "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 focus:ring-indigo-500",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-indigo-500",
    success: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
    error: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    warning: "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500",
  };

  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
