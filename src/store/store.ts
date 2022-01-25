import { configureStore, combineReducers, createSlice } from "@reduxjs/toolkit";
import user from "../slices/user";

// serializer middleware
// thunk middleware
// devtools middleware

const byList = createSlice({
  name: "byList",
  initialState: {},
  reducers: {},
});
const byId = createSlice({
  name: "byId",
  initialState: {},
  reducers: {},
});

const todos = combineReducers({
  byList: byList.reducer,
  byId: byId.reducer,
});

const store = configureStore({
  reducer: { user, todos },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
