import { configureStore, combineReducers } from '@reduxjs/toolkit';
import footerReducer from './footerReducer';
import bgrImgReducer from './bgrImgReducer';

const reducer = combineReducers({
    footer: footerReducer,
    bgrImg: bgrImgReducer
});

const store = configureStore({ reducer });

export default store;
