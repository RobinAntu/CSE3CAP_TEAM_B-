import React from "react";

export default function Sidebar() {
  return (
    <aside className="hidden md:block w-60 border-r border-gray-200 bg-white p-4 text-sm text-gray-500 space-y-8">
      <div>
        <h3 className="mb-2 text-xs font-semibold text-gray-400">PROGRESS TRACKING</h3>
        <p>Coming soon</p>
      </div>
      <div>
        <h3 className="mb-2 text-xs font-semibold text-gray-400">ALERTS</h3>
        <p>No alerts</p>
      </div>
    </aside>
  );
}
