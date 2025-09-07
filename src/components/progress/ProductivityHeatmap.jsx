import React from "react";
import { buildHeatmap } from "../../lib/analytics/heatmap";
import { format, parseISO } from "date-fns";

export default function ProductivityHeatmap({ events }) {
  const data = buildHeatmap(events);
  const weeks = Math.ceil(data.length / 7);
  const cells = [];
  for (let w = 0; w < weeks; w++) {
    const row = data.slice(w * 7, w * 7 + 7);
    cells.push(row);
  }
  const max = Math.max(...data.map(d => d.minutes), 1);
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm" aria-label="Productivity heatmap">
      <h3 className="mb-2 text-lg font-semibold">Productivity Heatmap</h3>
      <div className="grid grid-cols-7 gap-1">
        {cells.flat().map((c) => (
          <div
            key={c.date}
            title={`${format(parseISO(c.date), "eee d MMM")} — ${Math.round(c.minutes)}m`}
            className="h-4 w-4 rounded-sm"
            style={{ backgroundColor: `rgba(29,78,216,${c.minutes / max})` }}
          />
        ))}
      </div>
    </div>
  );
}
