import React from "react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import useScheduler from "../hooks/useScheduler";

export default function Dashboard() {
  const navigate = useNavigate();
  const { events } = useAppContext();
  const { generateSchedule } = useScheduler();
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const grouped = days.reduce((acc, d) => {
    acc[d] = events.filter((e) => e.day === d);
    return acc;
  }, {});

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
        <Card className="p-6">
          <h2 className="mb-4 text-xl font-semibold">Weekly Overview</h2>
          <div className="grid grid-cols-7 gap-4 text-sm">
            {days.map((day) => (
              <div key={day} className="space-y-2">
                <div className="text-center font-medium">{day}</div>
                {grouped[day].map((e, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-2 rounded-xl border border-gray-200 p-2"
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: e.color || "#3b82f6" }}
                    />
                    <div className="truncate">
                      <div className="truncate text-sm font-medium">{e.title}</div>
                      {e.course && (
                        <div className="truncate text-xs text-gray-500">{e.course}</div>
                      )}
                      {e.start && (
                        <div className="truncate text-xs text-gray-400">
                          {e.start} - {e.end}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Card>
    </div>
  );
}
