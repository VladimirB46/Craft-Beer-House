import { configureStore } from "@reduxjs/toolkit";

import cartReducer from '../features/cartSlice';
import savedReducer from '../features/savedSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        saved: savedReducer,
    },
});

export default store;