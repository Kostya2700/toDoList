import { createSlice } from "@reduxjs/toolkit";

const tasksInitialState = {
  tasks: [],
  filteredTasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.tasks.push(action.payload);
      },
    },
    deleteTask(state, action) {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      state.tasks.splice(index, 1);
    },
    toggleCompleted(state, action) {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    filterAlphabetically(state) {
      state.filteredTasks = state.tasks.slice().sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    },
  },
});

export const { addTask, deleteTask, toggleCompleted, filterAlphabetically } =
  tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
