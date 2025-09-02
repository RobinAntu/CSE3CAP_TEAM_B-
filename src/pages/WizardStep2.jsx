import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Select from "../components/ui/Select";
import Textarea from "../components/ui/Textarea";

export default function WizardStep2() {
  const navigate = useNavigate();
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold">Input Wizard</h1>
        <span className="text-sm text-gray-500">Step 2 of 3</span>
      </div>
      <div className="flex space-x-4 text-sm">
        <span>1 Course Details</span>
        <span>›</span>
        <span className="font-medium text-[#2563eb]">2 Goals & Timetable</span>
        <span>›</span>
        <span>3 Preferences</span>
      </div>
      <Card className="p-6 space-y-4">
        <h2 className="text-xl font-semibold">Learning Goals</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">Target Grade</label>
            <Select>
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium">Skill Acquisition</label>
            <Textarea
              rows={3}
              placeholder={'e.g., "Master Python for data analysis"'}
            />
          </div>
        </div>
      </Card>
      <Card className="p-6 space-y-4">
        <button className="flex w-full items-center justify-between">
          <span className="text-xl font-semibold">Personal Timetable</span>
        </button>
        <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center text-sm text-gray-500">
          Your time blocks will appear here
        </div>
      </Card>
      <div className="flex justify-between">
        <Link to="/wizard/1">
          <Button variant="ghost">Previous</Button>
        </Link>
        <Button onClick={() => navigate("/wizard/3")}>Next</Button>
      </div>
    </div>
  );
}
