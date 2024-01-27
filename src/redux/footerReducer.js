import { createSlice } from '@reduxjs/toolkit';

const footerSlice = createSlice({
    name: 'footer',
    initialState: { isVisible: false },
    reducers: {
        show(state) {
            state.isVisible = true;
        }
    }
});

const { show } = footerSlice.actions;
const footerReducer = footerSlice.reducer;

export const showFooter = () => show();

export const getFooterStatus = () => (state) => state.footer.isVisible;

export default footerReducer;
