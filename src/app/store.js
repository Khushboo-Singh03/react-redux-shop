import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "../features/userApi/apiSlice";
import cartReducer from "../features/userApi/cartSlice";

export const store = configureStore({
    reducer: {
        api: apiReducer,  //src\features\userApi\userSlice.js
        cart: cartReducer
    }
})

