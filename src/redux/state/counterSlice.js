import { createSlice } from "@reduxjs/toolkit";

export const counterStateSlice=createSlice({
    name:"counter",
    initialState:{
        countValue:0
    },
    reducers:{
        increment:(state)=>{
            state.countValue=state.countValue+1;
        },
        decrement:(state)=>{
            state.countValue=state.countValue-1;
        },
    }
})

export const {increment,decrement}=counterStateSlice.actions;
export default counterStateSlice.reducer;