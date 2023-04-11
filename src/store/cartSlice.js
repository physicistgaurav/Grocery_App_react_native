import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      // check if item is present inside the cart
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        // present so increase by one
        itemInCart.quantity++;
      } else {
        // not present so adding
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const removeFromCart = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = removeFromCart;
    },
    incrementQuantity: (state, action) => {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      itemInCart.quantity++;
    },
    decrementQuantity: (state, action) => {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart.quantity == 1) {
        const removeFromCart = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = removeFromCart;
      } else {
        itemInCart.quantity--;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartItemsCount = (state) => state.cart.cartItems.length;

export default cartSlice.reducer;
