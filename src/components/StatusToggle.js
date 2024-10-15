// src/components/StatusToggle.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateHabitStatus } from '../redux/habitsSlice';

const StatusToggle = ({ day, status, habitId }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    const nextStatus = status === 'done' ? 'not done' : status === 'not done' ? 'none' : 'done';
    dispatch(updateHabitStatus({ id: habitId, day, status: nextStatus }));
  };

  return (
    <button onClick={handleToggle} className={`status-button ${status}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </button>
  );
};

export default StatusToggle;
