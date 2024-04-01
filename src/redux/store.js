import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/CartSlick";

export const store = configureStore({
  reducer: {
    cartReducer,
  },
});
