import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <svg
        className="h-8 w-8 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.25278C12 6.25278 10.5 3.75278 7.5 3.75278C4.5 3.75278 3 6.25278 3 9.25278C3 12.2528 4.5 14.7528 7.5 14.7528C10.5 14.7528 12 11.7528 12 11.7528"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 17.7528C12 17.7528 13.5 20.2528 16.5 20.2528C19.5 20.2528 21 17.7528 21 14.7528C21 11.7528 19.5 9.25278 16.5 9.25278C13.5 9.25278 12 12.2528 12 12.2528"
        />
      </svg>
      <span className="text-2xl font-bold text-text-offset">StudyFlex</span>
    </div>
  );
}
