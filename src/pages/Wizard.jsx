import React, { useState } from 'react';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { useAppContext } from '../context/AppContext';

const Wizard = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const { addSubject, addAssessment, addFixedSlot, addTask, addStudySession } = useAppContext();

  const getAISuggestions = httpsCallable(getFunctions(), 'getAISuggestions');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await getAISuggestions({ prompt });
      const data = result.data;

      if (data.tool === 'create_subject') {
        addSubject(data.arguments);
        setResponse(`A new subject, ${data.arguments.course_code}: ${data.arguments.title}, has been added to your schedule.`);
      } else if (data.tool === 'add_assessment_to_subject') {
        addAssessment(data.arguments.course_code, data.arguments);
        setResponse(`A new assessment, ${data.arguments.title}, has been added to ${data.arguments.course_code}.`);
      } else if (data.tool === 'add_fixed_slot_to_subject') {
        addFixedSlot(data.arguments.course_code, data.arguments);
        setResponse(`A new ${data.arguments.type} has been added to ${data.arguments.course_code} on ${data.arguments.day} from ${data.arguments.start_time} to ${data.arguments.end_time}.`);
      } else if (data.tool === 'create_task') {
        addTask(data.arguments);
        setResponse(`A new task, ${data.arguments.title}, has been created for ${data.arguments.course_code}.`);
      } else if (data.tool === 'create_study_session') {
        addStudySession(data.arguments);
        const { start_time, end_time, task_title } = data.arguments;
        const startDate = new Date(start_time);
        const endDate = new Date(end_time);
        setResponse(`A new study session for '${task_title}' has been scheduled on ${startDate.toLocaleDateString()} from ${startDate.toLocaleTimeString()} to ${endDate.toLocaleTimeString()}.`);
      } else {
        setResponse(data.suggestions);
      }
    } catch (error) { 
      console.error('Error fetching AI suggestions:', error);
      setResponse('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">AI Wizard</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-2 border rounded"
          rows="5"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here..."
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Get Feedback'}
        </button>
      </form>
      {response && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h2 className="text-xl font-semibold">AI Feedback:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default Wizard;
