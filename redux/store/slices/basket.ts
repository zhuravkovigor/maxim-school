import { createSlice, type PayloadAction } from "@reduxjs/toolkit/react";

type BasketState = {
  items: string[];
};

const initialState: BasketState = {
  items: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<string>) {
      state.items.push(action.payload);
    },
  },
});

export const basketReducer = basketSlice.reducer;
export const { addItem } = basketSlice.actions;
