import { configureStore } from "@reduxjs/toolkit";
import user from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import langReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: user,
    movies: moviesReducer,
    gpt: gptReducer,
    lang: langReducer,
  },
});

export default appStore;
