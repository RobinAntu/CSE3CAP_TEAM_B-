import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Checkbox from "../components/ui/Checkbox";
import Radio from "../components/ui/Radio";
import Slider from "../components/ui/Slider";
import Select from "../components/ui/Select";
import Switch from "../components/ui/Switch";
import { weekly } from "../data/sample";
import { generatePlan } from "../lib/planner";

export default function WizardStep3() {
  const navigate = useNavigate();
  const [times, setTimes] = useState({ morning: true, afternoon: true, evening: false });
  const [length, setLength] = useState("60");
  const [hours, setHours] = useState(4);
  const [alerts, setAlerts] = useState(false);

  const handleGenerate = () => {
    const plan = generatePlan(weekly, {
      times,
      length: parseInt(length, 10),
      hours: Number(hours),
    });
    localStorage.setItem("sf_plan", JSON.stringify(plan));
    navigate("/dashboard");
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold">Input Wizard</h1>
        <span className="text-sm text-gray-500">Step 3 of 3</span>
      </div>
      <div className="flex space-x-4 text-sm">
        <span>1 Course Details</span>
        <span>›</span>
        <span>2 Goals & Timetable</span>
        <span>›</span>
        <span className="font-medium text-[#2563eb]">3 Preferences</span>
      </div>
      <Card className="p-6 space-y-4">
        <h2 className="text-xl font-semibold">Study Preferences</h2>
        <div className="space-y-2">
          <p className="text-sm font-medium">Preferred Study Times</p>
          <label className="flex items-center space-x-2"><Checkbox checked={times.morning} onChange={(e)=>setTimes({...times,morning:e.target.checked})}/> <span>Morning</span></label>
          <label className="flex items-center space-x-2"><Checkbox checked={times.afternoon} onChange={(e)=>setTimes({...times,afternoon:e.target.checked})}/> <span>Afternoon</span></label>
          <label className="flex items-center space-x-2"><Checkbox checked={times.evening} onChange={(e)=>setTimes({...times,evening:e.target.checked})}/> <span>Evening</span></label>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium">Session Length Options</p>
          <div className="flex space-x-4">
            {['30','60','90','120'].map((v) => (
              <label key={v} className="flex items-center space-x-1">
                <Radio
                  name="length"
                  value={v}
                  checked={length === v}
                  onChange={(e) => setLength(e.target.value)}
                />
                <span>{v}</span>
              </label>
            ))}
          </div>
        </div>
      </Card>
      <Card className="p-6 space-y-4">
        <h2 className="text-xl font-semibold">Customizations</h2>
        <div>
          <label className="block text-sm font-medium">
            Daily Study Hours: {hours}
          </label>
          <Slider min="1" max="8" value={hours} onChange={(e) => setHours(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium">Preferred Learning Style</label>
          <Select>
            <option>Visual</option>
            <option>Auditory</option>
            <option>Reading/Writing</option>
            <option>Kinesthetic</option>
          </Select>
        </div>
        <div className="flex items-center justify-between">
          <span>Enable AI Alerts</span>
          <Switch checked={alerts} onChange={setAlerts} />
        </div>
      </Card>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-full bg-gray-300" aria-label="avatar placeholder" />
          <div className="text-sm">
            <div className="font-medium">John Doe</div>
            <div className="text-gray-500">john.doe@example.com</div>
          </div>
        </div>
        <div className="space-x-2">
          <Link to="/wizard/2">
            <Button variant="ghost">Previous</Button>
          </Link>
          <Button onClick={handleGenerate}>Generate Schedule</Button>
        </div>
      </div>
    </div>
  );
}
