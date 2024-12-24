
import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

// Create slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload; 
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchUserDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUserDataSuccess: (state, action) => {
      state.currentUser = action.payload; 
      state.loading = false;
      state.error = null;
    },
    fetchUserDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Export actions
export const {
  signInStart,
  signInSuccess,
  signInFailure,
  fetchUserDataStart,
  fetchUserDataSuccess,
  fetchUserDataFailure,
} = userSlice.actions;

// Export reducer
export default userSlice.reducer;
