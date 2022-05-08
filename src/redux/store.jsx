import { configureStore } from "@reduxjs/toolkit";
import RocketReducer from './Rockets/RocketSlice';

export const store = configureStore ({
    reducer: {
        rockets: RocketReducer,
    }
})