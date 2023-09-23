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
      
        if (existingProduct && existingProduct.quantity > 0) {
          existingProduct.quantity--;
          state.totalPrice -= product.price;
          
          // If quantity becomes 0, you can choose to remove the item from the cart
          if (existingProduct.quantity === 0) {
            delete state.items[product.id];
          }
        }
      },     
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
