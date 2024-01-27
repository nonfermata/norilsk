import { configureStore, combineReducers } from '@reduxjs/toolkit';
import footerReducer from './footerReducer';

const reducer = combineReducers({
    footer: footerReducer
});

const store = configureStore({ reducer });

export default store;
