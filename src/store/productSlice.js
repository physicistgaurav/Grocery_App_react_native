import { createSlice } from "@reduxjs/toolkit";

import { productData } from "../data/productData";

export const cartSlice = createSlice({
  name: "product",
  initialState: {
    productItems: [...productData],
  },
  reducers: {},
});

export const selectProductItems = (state) => state.product.productItems;

export default cartSlice.reducer;
