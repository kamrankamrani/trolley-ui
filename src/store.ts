import { configureStore } from "@reduxjs/toolkit";
import shoppingListSlice from "./Features/shoppingListSlice";
import webSocketSlice from "./Features/webSocketSlice";

export const store = configureStore({
  reducer: {
    shoppingListSlice,
    webSocketSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
