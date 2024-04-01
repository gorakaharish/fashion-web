import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const CartSlick = createSlice({
  name: "CartSlick",
  initialState,
  reducers: {
    addToCar: (state, action) => {
      if (state.findIndex((pro) => pro.id === action.payload.id) === -1) {
        state.push(action.payload);
      } else {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    },
  },
});

export const { addToCar, removeFromCart } = CartSlick.actions;
export default CartSlick.reducer;
