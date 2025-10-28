import React from 'react';

const Gamification = () => {
  const [points, setPoints] = React.useState(1250);
  const [badges, setBadges] = React.useState(['Pioneer', 'Task Master', 'Scheduler']);

  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
      <p className="font-bold">Your Progress</p>
      <p>You have {points} points!</p>
      <div className="mt-2">
        <p className="font-semibold">Badges:</p>
        <div className="flex space-x-2 mt-1">
          {badges.map(badge => (
            <span key={badge} className="inline-block bg-yellow-200 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gamification;
