import React from "react";
import { perSubjectTotals } from "../../lib/analytics/progressMath";
import { weekDays } from "../../lib/time";

export default function AIRecommendations({ stats, events, tasks, courses, range }) {
  const tips = [];
  if (stats.focus < 60) {
    tips.push("Try longer, uninterrupted study sessions to boost focus.");
  }
  const totals = perSubjectTotals(events, tasks, range);
  for (const c of courses) {
    const mins = totals.studyMinutes[c.id] || 0;
    const target = (c.weeklyTargetHours || 0) * 60;
    if (target > 0 && mins < target * 0.5) {
      tips.push(`Add 1 session for ${c.code} to stay on track.`);
    }
  }
  if (!tips.length) tips.push("Great job! You're on track.");
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm" aria-label="AI recommendations">
      <h3 className="mb-2 text-lg font-semibold">AI Recommendations</h3>
      <ul className="list-disc pl-5 text-sm">
        {tips.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
