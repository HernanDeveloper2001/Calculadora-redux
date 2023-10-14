import { configureStore } from "@reduxjs/toolkit";
import { mathSlice } from "../features/math/mathSlice";


export const store = configureStore({
  reducer: {
    storeMath: mathSlice,
  }  
})