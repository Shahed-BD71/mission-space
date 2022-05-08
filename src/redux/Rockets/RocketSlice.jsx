import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    rockets: []
};
const movieSlice = createSlice({
    name: 'rockets',
    initialState,
    reducers: {
        addRockets: (state, action) => {
            state.rockets = action.payload;
        }
    }
})

export const {addRockets} = movieSlice.actions;
export const getAllRockets = (state) => state.rockets.rockets;
export default movieSlice.reducer;