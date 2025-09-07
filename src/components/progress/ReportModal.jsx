import React from "react";
import { createPortal } from "react-dom";
import { downloadCSV, printReport } from "../../lib/exporters/report";

export default function ReportModal({ open, onClose, stats }) {
  if (!open) return null;
  const node = (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-lg rounded-2xl bg-white p-4 shadow-lg">
        <h3 className="mb-4 text-lg font-semibold">Weekly Report</h3>
        <div id="report-content">
          <p>Study time: {stats.studyMins} mins</p>
          <p>Tasks completed: {stats.tasksCompleted}</p>
          <p>Focus score: {stats.focus}</p>
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button className="rounded bg-gray-200 px-3 py-1" onClick={() => printReport(document.getElementById('report-content'))}>Print</button>
          <button className="rounded bg-blue-600 px-3 py-1 text-white" onClick={() => downloadCSV('study_time_by_day.csv', [['day','minutes'], ...stats.daily.map(d=>[d.day,d.minutes])])}>CSV</button>
          <button className="rounded bg-gray-200 px-3 py-1" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
  return createPortal(node, document.body);
}
