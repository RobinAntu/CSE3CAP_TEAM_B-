import React from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Checkbox from "../components/ui/Checkbox";
import Badge from "../components/ui/Badge";

export default function TaskDetails() {
  const { id } = useParams();
  return (
    <div className="space-y-6">
      <Link to="/dashboard" className="text-[#2563eb]">‹ Back to Dashboard</Link>
      <Card className="p-6 space-y-4">
        <h1 className="text-2xl font-semibold">Complete Research Paper Draft</h1>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-sm text-gray-500">Course</p>
            <p>Advanced Data Structures</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Deadline</p>
            <p>May 15, 2024</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Estimated Completion Time</p>
            <p>8 hours</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Priority Level</p>
            <Badge color="red">High</Badge>
          </div>
        </div>
        <hr />
        <p>
          <strong>AI Prediction:</strong> Given your current pace, you are likely to complete this task on time.
        </p>
        <div>
          <p className="font-medium">AI Suggestions for Improvement</p>
          <ul className="list-disc pl-5 text-sm text-gray-600">
            <li>Start early to avoid last-minute rush.</li>
            <li>Break the task into smaller milestones for easier tracking.</li>
            <li>Allocate specific time slots in your weekly schedule.</li>
          </ul>
        </div>
        <div className="flex items-center justify-between pt-4">
          <Button variant="ghost">Edit Task</Button>
          <label className="flex items-center space-x-2">
            <Checkbox /> <span>Mark as Complete</span>
          </label>
        </div>
      </Card>
    </div>
  );
}
