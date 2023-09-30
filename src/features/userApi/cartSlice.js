import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.items[product.id];

      if (!existingProduct) {
        state.items[product.id] = { ...product, quantity: 1 };
      } else {
        existingProduct.quantity++;
      }

      state.totalPrice += product.price;
    },
    incrementQuantity: (state, action) => {
      const product = action.payload;
      const existingProduct = state.items[product.id];

      if (existingProduct) {
        existingProduct.quantity++;
        state.totalPrice += product.price;
      }
    },
    decrementQuantity: (state, action) => {
      const product = action.payload;
      const existingProduct = state.items[product.id];
    
      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          // If the product quantity is 1, remove it from the cart
          delete state.items[product.id];
        } else {
          // Decrease the quantity if it's greater than 1
          existingProduct.quantity--;
          state.totalPrice -= product.price;
        }
      }
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.items[product.id];

      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          delete state.items[product.id];
        } else {
          existingProduct.quantity--;
        }

        state.totalPrice -= product.price;
      }
    },
    
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
