import { createSlice } from "@reduxjs/toolkit";
import { evaluate } from "mathjs";


const initialState = {
  value1: "0",
  value2: "",
};

export const math = createSlice({
  name: "math",
  initialState,
  reducers: {
    agregarNumero: (state, action) => {
      if (state.value1 === "0") {
        state.value1 = action.payload;
      } else if (!state.value2) {
        state.value1 += action.payload;
      } else {
        state.value2 += action.payload;
      }
    },
    returnInitialState: (state, action) => {
      state.value1 = action.payload;
      state.value2 = "";
    },
    operation: (state, action) => {
      if(state.value1){
        try {
          state.value2 = state.value1 + action.payload + " " + evaluate(state.value1) 
          state.value1 = "";
        } catch (error) {
          state.value1 = "Erro de validacion"
        }
      }else{
        alert("Ingresa algun valor")
      }
    }
  }
})

export const { agregarNumero, returnInitialState, operation } = math.actions;
export const mathSlice = math.reducer;