import { createSlice } from "@reduxjs/toolkit";
import { fetchUserById } from "../actions/fetchUserById";

const initialState = {
  name: "",
  surname: "",
  birthdate: "",
  loading: false,
  error: "",
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.loading = false;
      state.name = action.payload.name;
      state.surname = action.payload.surname;
    });

    builder.addCase(fetchUserById.rejected, (state, action) => {
      state.loading = false;
      // state.error = action.payload;
    });
  },
});

export default user.reducer;
export const { setName } = user.actions;
