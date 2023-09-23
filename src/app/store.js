import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import apiReducer from "../features/userApi/apiSlice";
import cartReducer from "../features/userApi/cartSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,  //src\features\user\userSlice.js
        api: apiReducer,  //src\features\userApi\userSlice.js
        cart: cartReducer
    }
})

