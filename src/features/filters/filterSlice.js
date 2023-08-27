import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  type: "all",
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    statusChange: (state, action) => {
      state.type = action.payload;
    },
    searchBooks: (state, action) => {
      state.search = action.payload?.toLowerCase() || "";
    },
  },
});

export const { statusChange, searchBooks } = filterSlice.actions;
export default filterSlice.reducer;
