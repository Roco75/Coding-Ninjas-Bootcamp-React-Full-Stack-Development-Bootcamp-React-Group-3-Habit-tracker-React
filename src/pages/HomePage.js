// src/pages/HomePage.js
import React from 'react';
import HabitForm from '../components/HabitForm';
import HabitList from '../components/HabitList';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Habit Tracker</h1>
      <HabitForm />
      <HabitList />
    </div>
  );
};

export default HomePage;
