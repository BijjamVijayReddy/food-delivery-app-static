
// Language Slider Reducer.

import { createSlice } from "@reduxjs/toolkit";


const lanSlice = createSlice({
    name: "lanSlider",
    initialState: { lanSlider: false },

    reducers: {
        toggle(state) {
            state.lanSlider = !state.lanSlider
        }
    }

})

export const lanSlideractions = lanSlice.actions;
export default lanSlice;