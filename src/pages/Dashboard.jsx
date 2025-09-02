import React from "react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { Link, useNavigate } from "react-router-dom";
import { weekly } from "../data/sample";
import { generatePlan } from "../lib/planner";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleGenerate = () => {
    const plan = generatePlan(weekly);
    localStorage.setItem("sf_plan", JSON.stringify(plan));
    navigate("/plan");
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold">Dashboard</h1>
        <div className="space-x-2">
          <Button>Sync with Google Calendar</Button>
          <Link to="/task/1">
            <Button variant="ghost">View Task Details</Button>
          </Link>
          <Button variant="ghost" onClick={handleGenerate}>Generate Plan</Button>
        </div>
      </div>
      <Card className="p-6">
        <h2 className="mb-4 text-xl font-semibold">Weekly Overview</h2>
        <div className="grid grid-cols-7 gap-4 text-sm">
          {Object.entries(weekly).map(([day, tasks]) => (
            <div key={day} className="space-y-2">
              <div className="text-center font-medium">{day}</div>
              {tasks.map((t, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-2 rounded-xl border border-gray-200 p-2"
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      t.status === "red"
                        ? "bg-red-500"
                        : t.status === "yellow"
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                  />
                  <div className="truncate">
                    <div className="truncate text-sm font-medium">{t.title}</div>
                    <div className="truncate text-xs text-gray-500">{t.course}</div>
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
