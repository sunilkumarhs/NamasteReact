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
    modifyItem: (state, action) => {
      const { id, type } = action.payload;
      const updateItem = state.items.find((item) => item.id === id);
      if (updateItem) {
        if (type === "increase") {
          updateItem.itemCount = updateItem.itemCount + 1;
        } else {
          updateItem.itemCount = updateItem.itemCount - 1;
        }
      }
      // state.items.map((item) => {
      //   if (item.id === action.payload.info.id) {
      //     item["itemCount"] = action.payload.inc;
      //   }
      // });
    },
    addRes: (state, action) => {
      state.resDetails.push(action.payload);
    },
    removeRes: (state, action) => {
      state.resDetails.pop();
    },
  },
});

export const {
  addItem,
  removeItem,
  clearItems,
  modifyItem,
  addRes,
  removeRes,
} = cartSlice.actions;

export default cartSlice.reducer;
