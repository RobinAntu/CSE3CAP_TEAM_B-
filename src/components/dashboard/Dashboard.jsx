import React from "react";
import { useAuth } from "../../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();
  const today = new Date().toLocaleDateString();
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Welcome {user?.name || user?.email}</h1>
      <p className="mb-2">Today is {today}</p>
      <p>Your dashboard will show upcoming classes and tasks.</p>
    </div>
  );
}
