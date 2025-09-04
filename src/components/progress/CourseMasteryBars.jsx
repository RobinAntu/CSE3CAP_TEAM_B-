import React from "react";
import { perSubjectTotals } from "../../lib/analytics/progressMath";

export default function CourseMasteryBars({ events, tasks, courses, range }) {
  const totals = perSubjectTotals(events, tasks, range);
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm" aria-label="Course mastery">
      <h3 className="mb-2 text-lg font-semibold">Course Mastery</h3>
      <div className="space-y-2">
        {courses.map((c) => {
          const mins = totals.studyMinutes[c.id] || 0;
          const pct = c.weeklyTargetHours ? Math.min(mins / (c.weeklyTargetHours * 60), 1) * 100 : 0;
          const tasksDone = totals.doneTasks[c.id] || 0;
          return (
            <div key={c.id} className="text-sm">
              <div className="flex justify-between"><span>{c.code}</span><span>{tasksDone} tasks</span></div>
              <div className="h-2 w-full rounded bg-gray-200">
                <div className="h-2 rounded" style={{ width: `${pct}%`, backgroundColor: c.color || '#1d4ed8' }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
