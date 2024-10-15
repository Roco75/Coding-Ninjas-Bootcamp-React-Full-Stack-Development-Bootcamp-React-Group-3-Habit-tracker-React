// src/components/HabitItem.js
import React from 'react';
import StatusToggle from './StatusToggle';

const HabitItem = ({ habit }) => {
  return (
    <div className="habit-item">
      <h3>{habit.name}</h3>
      <div className="status-container">
        {habit.days.map((status, index) => (
          <StatusToggle key={index} day={index} status={status} habitId={habit.id} />
        ))}
      </div>
    </div>
  );
};

export default HabitItem;
