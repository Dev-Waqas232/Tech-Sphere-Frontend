import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types";

type initialState = {
  token: string | null;
  user: User | null;
};

const initialState: initialState = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    clearCredentials: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export default authSlice.reducer;
export const { clearCredentials, setCredentials } = authSlice.actions;
