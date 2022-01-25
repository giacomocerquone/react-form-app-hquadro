import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserById = createAsyncThunk(
  "user/fetchById",
  async (userId: number) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const json = await response.json();
    return json;
  }
);

export { fetchUserById };
