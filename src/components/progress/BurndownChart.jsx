import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { buildBurndown } from "../../lib/analytics/burndown";

export default function BurndownChart({ tasks }) {
  const range = { start: new Date(), end: new Date(Date.now() + 14 * 86400000) };
  const data = buildBurndown(tasks, range);
  return (
    <div className="h-64 w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-sm" aria-label="Burndown chart">
      <h3 className="mb-2 text-lg font-semibold">Burndown (next 2 weeks)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" hide />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="remainingHours" stroke="#ef4444" />
          <Line type="monotone" dataKey="idealHours" stroke="#1d4ed8" strokeDasharray="3 3" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
