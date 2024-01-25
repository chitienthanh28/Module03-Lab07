import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "./CounterSlice";
import  shoppingCartSlice  from "./ShoppingSlice";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    shopping: shoppingCartSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
