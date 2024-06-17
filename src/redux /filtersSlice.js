import { createAction, createSlice } from "@reduxjs/toolkit";


// pattern createSlice
const filtersSlice = createSlice({
  name: "filters",
  initialState: { status: "" },
  reducers: {
    setFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;


// pattern builder
