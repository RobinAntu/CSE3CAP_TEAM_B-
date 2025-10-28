import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useAppContext } from "../context/AppContext";
import { toMinutes } from "../lib/time";

export default function Progress() {
  const { courses, events } = useAppContext();

  const data = courses.map((course) => {
    const studyHours = events
      .filter((e) => e.courseId === course.id && e.kind === "study")
      .reduce((total, e) => {
        const start = toMinutes(e.start);
        const end = toMinutes(e.end);
        return total + (end - start) / 60;
      }, 0);

    return { name: course.code, "Study Hours": studyHours };
  });

  return (
    <div className="p-6 bg-surface border border-border rounded-lg">
      <h2 className="text-lg font-semibold text-text-offset">Progress Tracking</h2>
      <div className="mt-4" style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Study Hours" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
