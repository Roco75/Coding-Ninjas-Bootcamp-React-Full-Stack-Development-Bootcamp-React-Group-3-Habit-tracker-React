// src/components/HabitForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHabit } from '../redux/habitsSlice';

const HabitForm = () => {
  const [habitName, setHabitName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName.trim() !== '') {
      const newHabit = {
        id: Date.now(),
        name: habitName,
        days: Array(7).fill('none'), // Initial status for each day
      };
      dispatch(addHabit(newHabit));
      setHabitName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="Enter habit name"
        required
      />
      <button type="submit">Add Habit</button>
    </form>
  );
};

export default HabitForm;
