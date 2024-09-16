import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "lang",
  initialState: {
    langKey: "en",
  },
  reducers: {
    languageChange: (state, action) => {
      state.langKey = action.payload;
    },
  },
});

export const { languageChange } = configSlice.actions;
export default configSlice.reducer;
