import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {CarModel} from "./types/models";
//init
let carModel:CarModel={
    count:1,
    name:"BMW",
    year:"1988"
}
export const carSlice=createSlice({
    name:'carSlice',
    initialState:carModel,
    reducers:{
        setYear:(state,action:PayloadAction<string>)=>{
            state.year=action.payload;
        }
    }
})
export const {setYear} = carSlice.actions;
export default carSlice.reducer