import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [],
  error: null,
  loading: false, 
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    // Action to add a new student
    addStudent: (state, action) => {
      state.loading = false;
      state.error = null;
      state.students.push(action.payload); 
    },
    // Action to fetch students
    fetchStudentsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchStudentsSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.students = action.payload; 
    },
    fetchStudentsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload; 
    },
    // Action to update a student
    updateStudent: (state, action) => {
      state.loading = false;
      state.error = null;
      const index = state.students.findIndex(
        (student) => student.id === action.payload.id
      );
      if (index !== -1) {
        state.students[index] = { ...state.students[index], ...action.payload };
      }
    },
    // Action to delete a student
    deleteStudent: (state, action) => {
      state.loading = false;
      state.error = null;
      state.students = state.students.filter(
        (student) => student.id !== action.payload
      );
    },
  },
});

// Export actions
export const {
  addStudent,
  fetchStudentsStart,
  fetchStudentsSuccess,
  fetchStudentsFailure,
  updateStudent,
  deleteStudent,
} = studentSlice.actions;

// Export the reducer
export default studentSlice.reducer;
