import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface adminState {
  accessToken: string | null;
}

const initialState: adminState = {
  accessToken: null,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      localStorage.setItem("adminAccessToken", action.payload);
    },
    removeAccessToken: (state) => {
      state.accessToken = null;
      localStorage.removeItem("adminAccessToken");
    },
  },
});

export const { setAccessToken, removeAccessToken } = adminSlice.actions;
export default adminSlice.reducer;
