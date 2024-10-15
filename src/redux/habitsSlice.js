// src/redux/habitsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const habitsSlice = createSlice({
  name: 'habits',
  initialState: [],
  reducers: {
    addHabit: (state, action) => {
      state.push(action.payload);
    },
    updateHabitStatus: (state, action) => {
      const { id, day, status } = action.payload;
      const habit = state.find((habit) => habit.id === id);
      if (habit) {
        habit.days[day] = status; // Update the status for the specific day
      }
    },
  },
});

export const { addHabit, updateHabitStatus } = habitsSlice.actions;
export default habitsSlice.reducer;
