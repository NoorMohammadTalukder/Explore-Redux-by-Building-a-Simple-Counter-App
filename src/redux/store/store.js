import { configureStore } from "@reduxjs/toolkit";
import  counterStateSlice  from "../state/counterSlice";
export default configureStore({
    reducer:{
        counter:counterStateSlice
    }
})