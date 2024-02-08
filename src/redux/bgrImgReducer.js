import { createSlice } from '@reduxjs/toolkit';

const bgrImgSlice = createSlice({
    name: 'bgrImg',
    initialState: { bgr: null },
    reducers: {
        set(state, action) {
            state.bgr = action.payload;
        }
    }
});

const { set } = bgrImgSlice.actions;
const bgrImgReducer = bgrImgSlice.reducer;

export const setBrg = (image) => set(image);

export const getBgr = () => (state) => state.bgrImg.bgr;

export default bgrImgReducer;
