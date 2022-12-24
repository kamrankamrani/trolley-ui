import { configureStore } from "@reduxjs/toolkit";
import shoppingListSlice from "./Features/shoppingListSlice";

export const store = configureStore({
  reducer: {
    shoppingListSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
