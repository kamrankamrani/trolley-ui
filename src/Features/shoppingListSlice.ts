import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { shoppingListDataType, shoppingListItems } from "../Services/Types";
import Img from "../assets/pics/lemon.jpg";

const initialState: shoppingListItems = {
  items: [
    {
      id: 0,
      name: "لیمو سنگی",
      count: 2,
      price: "2000",
      unitPrice: "1000",
      url: Img,
    },
    {
      id: 1,
      name: "لیمو سنگی",
      count: 2,
      price: "2000",
      unitPrice: "1000",
      url: Img,
    },
    {
      id: 2,
      name: "لیمو سنگی",
      count: 2,
      price: "2000",
      unitPrice: "1000",
      url: Img,
    },
  ],
};

const shoppingListSlice = createSlice({
  name: "shoppingListSlice",
  initialState,
  reducers: {
    setShoppingList(state, action: PayloadAction<shoppingListDataType[]>) {
      state.items = action.payload;
    },
  },
});

export default shoppingListSlice.reducer;
export const { setShoppingList } = shoppingListSlice.actions;
