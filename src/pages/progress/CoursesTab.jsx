import React from "react";
import CourseMasteryBars from "../../components/progress/CourseMasteryBars";

export default function CoursesTab({ events, tasks, courses, range }) {
  return (
    <div className="space-y-4">
      <CourseMasteryBars events={events} tasks={tasks} courses={courses} range={range} />
    </div>
  );
}
