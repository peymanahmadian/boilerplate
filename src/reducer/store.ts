import {configureStore} from "@reduxjs/toolkit";
//import reducers.slice 
import carReducerSlice from "../services/car/car.reducer.slice";
export const store=configureStore({
    reducer:{
        car:carReducerSlice
    }
});

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch