import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface StyleProduct {
  id: number;
  name: string;
  price: number;
  imgSrc: string;
}

const initialState: StyleProduct[] = [];

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      const product = action.payload;
      console.log(state)
      state.push(product);
      return state;
    },
  },
});

export const { addToCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;