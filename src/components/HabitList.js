// src/components/HabitList.js
import React from 'react';
import { useSelector } from 'react-redux';
import HabitItem from './HabitItem';

const HabitList = () => {
  const habits = useSelector((state) => state.habits);

  return (
    <div>
      <h2>Your Habits</h2>
      {habits.length === 0 ? (
        <p>No habits added yet!</p>
      ) : (
        <ul>
          {habits.map((habit) => (
            <HabitItem key={habit.id} habit={habit} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default HabitList;
