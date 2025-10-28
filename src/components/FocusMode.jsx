import React from 'react';

const FocusMode = ({ task, onExit }) => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Focus Mode</h1>
        <p className="text-xl mb-8">Currently focusing on:</p>
        <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
          <h2 className="text-2xl font-semibold">{task.title}</h2>
          {task.course && <p className="text-lg text-gray-600">{task.course}</p>}
          <p className="text-lg mt-2">Due: {task.dueDate}</p>
        </div>
        <button 
          onClick={onExit} 
          className="mt-8 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Exit Focus Mode
        </button>
      </div>
    </div>
  );
};

export default FocusMode;
