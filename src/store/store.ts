import { configureStore } from "@reduxjs/toolkit";

// serializer middleware
// thunk middleware
// devtools middleware

const store = configureStore({
  reducer: {
    user: () => {},
    todos: () => {},
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
