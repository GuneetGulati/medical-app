import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    details: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    setDetails: (state, action) => {
      state.details = action.payload;
      
    },
  },
});

export const { login, logout, setDetails } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectDetails = (state) => state.user.details;
export default userSlice.reducer;
