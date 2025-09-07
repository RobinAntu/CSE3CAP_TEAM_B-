import React, { useState } from "react";
import { startOfWeek, endOfWeek } from "date-fns";
import { useAppContext } from "../../context/AppContext";
import FiltersBar from "../../components/progress/FiltersBar";
import StatsCards from "../../components/progress/StatsCards";
import WeeklyTab from "./WeeklyTab";
import CoursesTab from "./CoursesTab";
import GoalsTab from "./GoalsTab";
import ReportModal from "../../components/progress/ReportModal";
import { buildStats } from "../../lib/analytics/progressMath";

export default function Progress() {
  const { events, tasks, courses, prefs } = useAppContext();
  const [range, setRange] = useState({ start: startOfWeek(new Date(), { weekStartsOn: 1 }), end: endOfWeek(new Date(), { weekStartsOn: 1 }) });
  const [tab, setTab] = useState("weekly");
  const [reportOpen, setReportOpen] = useState(false);
  const stats = buildStats(events, tasks, courses, range, prefs);
  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Progress</h1>
          <p className="text-gray-500">Track learning over time</p>
        </div>
        <div className="flex space-x-2">
          <button className="rounded bg-blue-600 px-3 py-1 text-white" onClick={() => setReportOpen(true)}>Export</button>
        </div>
      </header>
      <FiltersBar range={range} onRangeChange={setRange} onExport={() => setReportOpen(true)} />
      <StatsCards stats={stats} />
      <div className="flex space-x-4 border-b">
        {[["weekly","Weekly"],["courses","Courses"],["goals","Goals"]].map(([key,label]) => (
          <button key={key} className={`pb-2 ${tab===key?'border-b-2 border-blue-600':''}`} onClick={()=>setTab(key)}>{label}</button>
        ))}
      </div>
      {tab === "weekly" && <WeeklyTab events={events} tasks={tasks} courses={courses} range={range} stats={stats} />}
      {tab === "courses" && <CoursesTab events={events} tasks={tasks} courses={courses} range={range} />}
      {tab === "goals" && <GoalsTab />}
      <ReportModal open={reportOpen} onClose={() => setReportOpen(false)} stats={stats} />
    </div>
  );
}
