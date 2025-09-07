import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Textarea from '../components/ui/Textarea';

export default function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();

  // In a real app, you'''d fetch the task data based on the id
  // For now, we'''ll use some placeholder data
  const [taskName, setTaskName] = useState('Complete Research Paper Draft');
  const [course, setCourse] = useState('Advanced Data Structures');
  const [deadline, setDeadline] = useState('2024-05-15');
  const [estimatedTime, setEstimatedTime] = useState('8');
  const [priority, setPriority] = useState('High');
  const [description, setDescription] = useState('This is a placeholder description for the research paper draft. It needs to be updated with the actual details of the task.');

  const handleSaveChanges = (e) => {
    e.preventDefault();
    // Here you would typically update the task in your database
    console.log('Saving changes for task:', id);
    navigate(`/task/${id}`); // Go back to task details page
  };

  const handleCancel = () => {
    navigate(`/task/${id}`); // Go back to task details page
  };


  return (
    <div className="space-y-6">
        <Link to={`/task/${id}`} className="text-[#2563eb]">‹ Back to Task Details</Link>
        <Card className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Edit Task</h1>
            <form onSubmit={handleSaveChanges} className="space-y-4">
                <div>
                    <label htmlFor="taskName" className="block text-sm font-medium text-gray-700">Task Name</label>
                    <Input
                        id="taskName"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        className="mt-1 block w-full"
                    />
                </div>

                <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course</label>
                    <Input
                        id="course"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        className="mt-1 block w-full"
                    />
                </div>

                <div>
                    <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">Deadline</label>
                    <Input
                        type="date"
                        id="deadline"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        className="mt-1 block w-full"
                    />
                </div>

                <div>
                    <label htmlFor="estimatedTime" className="block text-sm font-medium text-gray-700">Estimated Completion Time (hours)</label>
                    <Input
                        type="number"
                        id="estimatedTime"
                        value={estimatedTime}
                        onChange={(e) => setEstimatedTime(e.target.value)}
                        className="mt-1 block w-full"
                    />
                </div>

                <div>
                    <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority</label>
                    <Select
                        id="priority"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="mt-1 block w-full"
                    >
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </Select>
                </div>
                
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <Textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 block w-full"
                        rows="4"
                    />
                </div>

                <div className="flex justify-end space-x-4">
                    <Button type="button" variant="ghost" onClick={handleCancel}>Cancel</Button>
                    <Button type="submit">Save Changes</Button>
                </div>
            </form>
        </Card>
    </div>
  );
}
