import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getFunctions, httpsCallable } from "firebase/functions";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Checkbox from "../components/ui/Checkbox";
import Badge from "../components/ui/Badge";

export default function TaskDetails() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [suggestions, setSuggestions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const functions = getFunctions();
        const getAISuggestions = httpsCallable(functions, 'getAISuggestions');
        const result = await getAISuggestions({ 
          prompt: `Give me some suggestions for how to complete the following task: ${id}`
        });
        setSuggestions(result.data.suggestions);
      } catch (error) {
        setError("Failed to fetch AI suggestions. Please try again later.");
      }
    };

    fetchSuggestions();
  }, [id]);

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
        <div>
          <p className="font-medium">AI Suggestions for Improvement</p>
          {loading && <p>Loading AI suggestions...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {suggestions && (
            <ul className="list-disc pl-5 text-sm text-gray-600">
              {suggestions.split('\n').map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          )}
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
