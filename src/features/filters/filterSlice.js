import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "all",
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    statusChange: (state) => {
      state.status = "featured";
    },
  },
});

export const { statusChange } = filterSlice.actions;
export default filterSlice.reducer;
