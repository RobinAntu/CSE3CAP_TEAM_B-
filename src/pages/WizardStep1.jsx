import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Textarea from "../components/ui/Textarea";
import { Accordion, AccordionItem } from "../components/ui/Accordion";

export default function WizardStep1() {
  const navigate = useNavigate();
  const [course, setCourse] = useState("");

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-semibold">Input Wizard</h1>
          <p className="text-gray-500">Provide details to help us craft your personalized study schedule.</p>
        </div>
        <span className="text-sm text-gray-500">Step 1 of 3</span>
      </div>
      <div className="flex space-x-4 text-sm">
        <span className="font-medium text-[#2563eb]">1 Course Details</span>
        <span>›</span>
        <span>2 Goals & Timetable</span>
        <span>›</span>
        <span>3 Preferences</span>
      </div>
      <Accordion>
        <AccordionItem title="Course Details & Deadlines" defaultOpen>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium">Course Name</label>
              <Input value={course} onChange={(e) => setCourse(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium">Credit Hours</label>
              <Select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium">Midterm Exam Deadline</label>
              <Input type="date" />
            </div>
            <div>
              <label className="block text-sm font-medium">Final Project Deadline</label>
              <Input type="date" />
            </div>
          </div>
        </AccordionItem>
        <AccordionItem title="Learning Goals & Personal Timetable">
          <Textarea rows={3} placeholder="Your learning goals" />
          <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center text-sm text-gray-500">Time blockers placeholder</div>
        </AccordionItem>
        <AccordionItem title="Study Preferences & Customizations">
          <label className="flex items-center space-x-2"><input type="checkbox" className="h-4 w-4"/> <span>Option A</span></label>
          <label className="flex items-center space-x-2"><input type="checkbox" className="h-4 w-4"/> <span>Option B</span></label>
        </AccordionItem>
      </Accordion>
      <div className="flex justify-between">
        <Link to="/dashboard">
          <Button variant="ghost">Previous</Button>
        </Link>
        <Button onClick={() => navigate("/wizard/2")}>Next</Button>
      </div>
    </div>
  );
}
