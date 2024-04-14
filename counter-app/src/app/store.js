import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "../features/counters/countersSlice";

const store = configureStore({
  reducer: {
    counters: countersReducer, // there are called states, could be multiple
  },
});

export default store;
