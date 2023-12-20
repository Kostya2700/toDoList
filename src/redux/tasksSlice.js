import { createSlice } from "@reduxjs/toolkit";

const tasksInitialState = {
  tasks: [],
  filteredTasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleCompleted(state, action) {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    filterAlphabetically(state) {
      state.filteredTasks = [...state.tasks].sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    },
    updateTask(state, action) {
      const { id, title, description } = action.payload;
      const taskToUpdate = state.tasks.find((task) => task.id === id);
      if (taskToUpdate) {
        taskToUpdate.title = title;
        taskToUpdate.description = description;
      }
    },
  },
});

export const {
  addTask,
  deleteTask,
  toggleCompleted,
  filterAlphabetically,
  updateTask,
} = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
