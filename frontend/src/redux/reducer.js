import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    token: ""
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.email = "";
      state.token = "";
    }
  },
});

export const { setEmail, setToken, logout } = userSlice.actions;

export const userReducer = userSlice.reducer;