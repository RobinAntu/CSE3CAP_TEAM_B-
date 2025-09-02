import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="space-x-4">
        <Link to="/dashboard" className="font-semibold">StudyFlex</Link>
        {user && <Link to="/settings">Settings</Link>}
      </div>
      {user && (
        <button onClick={logout} className="underline">Logout</button>
      )}
    </nav>
  );
}
