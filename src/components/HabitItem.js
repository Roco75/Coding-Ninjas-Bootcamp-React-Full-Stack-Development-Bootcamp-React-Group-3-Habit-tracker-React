// src/components/HabitItem.js
import React from 'react';
import StatusToggle from './StatusToggle';

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const HabitItem = ({ habit }) => {
  return (
    <div className="habit-item">
      <h3>{habit.name}</h3>
      <div className="status-container">
        {habit.days.map((status, index) => (
          <div key={index} className="day-status">
            <span className="day-name">{weekDays[index]}</span>
            <StatusToggle day={index} status={status} habitId={habit.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HabitItem;
