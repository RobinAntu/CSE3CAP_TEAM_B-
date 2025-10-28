import React from 'react';
import useAICoach from '../hooks/useAICoach';
import Button from './ui/Button';

const AICoach = () => {
  const { recommendation, isLoading, error, executeToolCall, refetch } = useAICoach();

  const handleExecute = () => {
    if (recommendation && recommendation.tool_calls) {
      recommendation.tool_calls.forEach(executeToolCall);
    }
  };

  return (
    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-6" role="alert">
      <div className="flex justify-between items-start">
        <div>
            <p className="font-bold">AI Coach</p>
            {isLoading && <p>Thinking...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {recommendation && <p>{recommendation.text}</p>}
        </div>
        <Button onClick={refetch} variant="ghost" size="sm">Refresh</Button>
      </div>
      {recommendation && recommendation.tool_calls && (
        <div className="mt-4">
          <Button onClick={handleExecute} size="sm">
            Do it for me
          </Button>
        </div>
      )}
    </div>
  );
};

export default AICoach;
