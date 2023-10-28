import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    resDetails: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop(action.payload);
    },
    clearItems: (state) => {
      state.items.length = 0;
    },
    addRes: (state, action) => {
      state.resDetails.push(action.payload);
    },
    removeRes: (state, action) => {
      state.resDetails.pop();
    },
  },
});

export const { addItem, removeItem, clearItems, addRes, removeRes } =
  cartSlice.actions;

export default cartSlice.reducer;
