import React from "react";

export default function Button({
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 h-10 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/40 disabled:opacity-50";
  const variants = {
    primary: "bg-[#1d4ed8] text-white hover:bg-[#1e40af]",
    ghost: "bg-transparent text-[#1d4ed8] hover:bg-blue-50",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
}
