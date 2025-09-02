import React from "react";
import { Link } from "react-router-dom";
import Input from "../ui/Input";
import IconButton from "../ui/IconButton";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-2">
      <div className="flex items-center space-x-8">
        <Link to="/dashboard" className="text-2xl font-semibold text-[#2563eb]">
          Study Flex
        </Link>
        <div className="hidden md:flex items-center space-x-4 text-sm text-gray-600">
          <Link to="/dashboard" className="hover:text-gray-900">Home</Link>
          <Link to="#" className="hover:text-gray-900">Schedule</Link>
          <Link to="/wizard/1" className="hover:text-gray-900">Input Wizard</Link>
          <Link to="/settings" className="hover:text-gray-900">Settings</Link>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Input type="search" placeholder="Search" className="hidden md:block w-48 shadow-sm" />
        <IconButton aria-label="notifications">
          <span role="img" aria-label="bell">🔔</span>
        </IconButton>
        <div className="h-8 w-8 rounded-full bg-gray-300" aria-label="avatar placeholder" />
      </div>
    </nav>
  );
}
