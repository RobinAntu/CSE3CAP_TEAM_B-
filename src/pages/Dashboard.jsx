import React from "react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import useScheduler from "../hooks/useScheduler";
import Progress from "../components/Progress";
import Alerts from "../components/Alerts";

export default function Dashboard() {
  const navigate = useNavigate();
  const { events, courses } = useAppContext();
  const { generateSchedule } = useScheduler();
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const courseMap = React.useMemo(
    () => Object.fromEntries(courses.map((c) => [c.id, c])),
    [courses]
  );
  const studyEvents = events.filter((e) => e.title && e.title.startsWith("Study: "));
  const grouped = days.reduce((acc, d) => {
    acc[d] = studyEvents.filter((e) => e.day === d);
    return acc;
  }, {});
  const hasEvents = studyEvents.length > 0;

  return (
    <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-semibold">Dashboard</h1>
          <div className="space-x-2">
            <Button
              onClick={() =>
                window.open("https://calendar.google.com/calendar/u/0/r", "_blank")
              }
            >
              Sync with Google Calendar
            </Button>
            <Link to="/task/1">
              <Button variant="ghost">View Task Details</Button>
            </Link>
            <Button variant="ghost" onClick={() => navigate("/wizard/1")}>Generate Plan</Button>
            <Button variant="ghost" onClick={() => generateSchedule()}>Regenerate Schedule</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {hasEvents ? (
              <Card className="p-6">
                <h2 className="mb-4 text-xl font-semibold">Weekly Overview</h2>
                <div className="grid grid-cols-7 gap-4 text-sm">
                  {days.map((day) => (
                    <div key={day} className="space-y-2">
                      <div className="text-center font-medium">{day}</div>
                      {grouped[day].map((e) => (
                        <div
                          key={e.id}
                          className="flex items-center space-x-2 rounded-xl border border-gray-200 p-2"
                        >
                          <span
                            className="h-2 w-2 rounded-full"
                            style={{ backgroundColor: e.color || "#3b82f6" }}
                          />
                          <div className="truncate">
                            <div className="truncate text-sm font-medium">{e.title}</div>
                            {courseMap[e.courseId]?.code && (
                              <div className="truncate text-xs text-gray-500">
                                {courseMap[e.courseId].code}
                              </div>
                            )}
                            <div className="truncate text-xs text-gray-400">
                              {e.start} - {e.end}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </Card>
            ) : (
              <Card className="p-6 h-full flex flex-col items-center justify-center">
                <h2 className="text-xl font-semibold text-text-offset">No events scheduled</h2>
                <p className="mt-2 text-text-muted">Click the "Generate Plan" button to create your study schedule.</p>
              </Card>
            )}
          </div>
          <div className="space-y-8">
            <Progress />
            <Alerts />
          </div>
        </div>
    </div>
  );
}
