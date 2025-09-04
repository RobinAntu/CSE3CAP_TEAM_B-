import React from "react";

export default function StatsCards({ stats }) {
  const cards = [
    {
      title: "Study time",
      value: `${Math.round(stats.studyMins / 60)}h ${stats.studyMins % 60}m`,
      subtitle: `Target ${(stats.targetMins / 60).toFixed(1)}h`,
      icon: "📊",
    },
    {
      title: "Tasks completed",
      value: stats.tasksCompleted,
      subtitle: `${stats.completionRate}% complete`,
      icon: "✅",
    },
    {
      title: "Streak",
      value: `${stats.streak} days`,
      subtitle: "consecutive",
      icon: "🔥",
    },
    {
      title: "Focus score",
      value: stats.focus,
      subtitle: "out of 100",
      icon: "⚡",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((c) => (
        <div
          key={c.title}
          className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
        >
          <div>
            <div className="text-sm text-gray-500">{c.title}</div>
            <div className="text-2xl font-semibold">{c.value}</div>
            <div className="text-xs text-gray-500">{c.subtitle}</div>
          </div>
          <span className="text-2xl" aria-hidden="true">{c.icon}</span>
        </div>
      ))}
    </div>
  );
}
