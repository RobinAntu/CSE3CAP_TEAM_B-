import React from "react";
import { startOfWeek, endOfWeek } from "date-fns";

export default function FiltersBar({ range, onRangeChange, onExport }) {
  function setThisWeek() {
    const start = startOfWeek(new Date(), { weekStartsOn: 1 });
    const end = endOfWeek(new Date(), { weekStartsOn: 1 });
    onRangeChange({ start, end });
  }
  return (
    <div className="flex flex-wrap items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="space-x-2">
        <button className="rounded bg-blue-600 px-3 py-1 text-white" onClick={setThisWeek}>This week</button>
      </div>
      <div className="space-x-2">
        <button className="rounded bg-gray-200 px-3 py-1" onClick={onExport}>Export report</button>
      </div>
    </div>
  );
}
