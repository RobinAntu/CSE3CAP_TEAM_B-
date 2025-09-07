import React from "react";
import StudyTimeChart from "../../components/progress/StudyTimeChart";
import ProductivityHeatmap from "../../components/progress/ProductivityHeatmap";
import BurndownChart from "../../components/progress/BurndownChart";
import CourseMasteryBars from "../../components/progress/CourseMasteryBars";
import FocusGauge from "../../components/progress/FocusGauge";
import AIRecommendations from "../../components/progress/AIRecommendations";

export default function WeeklyTab({ events, tasks, courses, range, stats }) {
  return (
    <div className="space-y-4">
      <StudyTimeChart data={stats.daily} />
      <ProductivityHeatmap events={events} />
      <BurndownChart tasks={tasks} />
      <CourseMasteryBars events={events} tasks={tasks} courses={courses} range={range} />
      <FocusGauge score={stats.focus} />
      <AIRecommendations stats={stats} events={events} tasks={tasks} courses={courses} range={range} />
    </div>
  );
}
