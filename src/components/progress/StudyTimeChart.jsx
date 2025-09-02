import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { weekDays } from "../../lib/time";

export default function StudyTimeChart({ data }) {
  const chartData = weekDays.map((d, i) => ({ day: d, minutes: data[i] ? data[i].minutes : 0 }));
  return (
    <div className="h-64 w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-sm" aria-label="Study time chart">
      <h3 className="mb-2 text-lg font-semibold">Study Time by Day</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="minutes" fill="#1d4ed8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
