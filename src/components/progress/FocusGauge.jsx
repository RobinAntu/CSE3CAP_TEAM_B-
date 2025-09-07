import React from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from "recharts";

export default function FocusGauge({ score }) {
  const data = [{ name: "focus", value: score }];
  return (
    <div className="h-64 w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-sm" aria-label="Focus gauge">
      <h3 className="mb-2 text-lg font-semibold">Focus Gauge</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="70%"
          outerRadius="100%"
          startAngle={180}
          endAngle={0}
          data={data}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
          <RadialBar dataKey="value" fill="#1d4ed8" background clockWise cornerRadius={5} />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="mt-2 text-center text-2xl font-semibold">{score}</div>
    </div>
  );
}
