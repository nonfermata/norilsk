import { configureStore, combineReducers } from '@reduxjs/toolkit';
import footerReducer from './footerReducer';
import bgrImgReducer from './bgrImgReducer';
import burgerReducer from './burgerReducer';

const reducer = combineReducers({
    footer: footerReducer,
    bgrImg: bgrImgReducer,
    burger: burgerReducer
});

const store = configureStore({ reducer });

export default store;
