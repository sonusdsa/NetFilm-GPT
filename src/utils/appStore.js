import { configureStore } from "@reduxjs/toolkit";
import user from "./userSlice";
import moviesReducer from "./moviesSlice";

const appStore = configureStore({
  reducer: {
    user: user,
    movies: moviesReducer,
  },
});

export default appStore;
