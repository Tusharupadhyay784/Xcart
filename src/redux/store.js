import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./reducer/cartSlice";

export const store = configureStore({
    reducer:{
        cart:CartSlice
    }
})