import { useState, useEffect, useCallback } from 'react';
import { useAppContext } from '../context/AppContext';
import { AI } from '../lib/ai';

const useAICoach = () => {
  const { courses, events, tasks, prefs, addStudySession, addTask } = useAppContext();
  const [recommendation, setRecommendation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecommendation = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const prompt = `Based on the following data, provide a helpful recommendation for the user including a tool call if applicable:\n\nCourses: ${JSON.stringify(courses)}\nEvents: ${JSON.stringify(events)}\nTasks: ${JSON.stringify(tasks)}\nPreferences: ${JSON.stringify(prefs)}\n\nRecommendation:`;

      const ai = new AI();
      const result = await ai.generateText(prompt);
      setRecommendation(result);
    } catch (err) {
      setError('Failed to get recommendation from AI Coach.');
      console.error(err);
    }
    setIsLoading(false);
  }, [courses, events, tasks, prefs]);

  useEffect(() => {
    fetchRecommendation();
  }, [fetchRecommendation]);

  const executeToolCall = (toolCall) => {
    if (toolCall.name === 'add_study_session') {
      addStudySession(toolCall.arguments);
      fetchRecommendation();
    } else if (toolCall.name === 'add_task_to_subject') {
      addTask(toolCall.arguments);
      fetchRecommendation();
    }
  };

  return { recommendation, isLoading, error, executeToolCall, refetch: fetchRecommendation };
};

export default useAICoach;
