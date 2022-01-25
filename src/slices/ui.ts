import { createSlice } from "@reduxjs/toolkit";

const ui = createSlice({
  initialState: {
    loaderActive: false,
  },
  name: "ui",
  reducers: {
    toggleLoader: (state) => {
      state.loaderActive = !state.loaderActive;
    },
  },
});

export default ui.reducer;

export const { toggleLoader } = ui.actions;
