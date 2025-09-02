import React from "react";

export default function Plan() {
  const plan = JSON.parse(localStorage.getItem("sf_plan") || "[]");
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-semibold">Study Plan</h1>
      {plan.length === 0 && (
        <p className="text-gray-500">No plan generated.</p>
      )}
      <div className="space-y-2">
        {plan.map((p, idx) => (
          <div
            key={idx}
            className="rounded-lg border border-gray-200 p-3 shadow-sm"
          >
            <div className="font-medium">{p.title}</div>
            <div className="text-sm text-gray-500">
              {p.day} {p.start} - {p.end}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
