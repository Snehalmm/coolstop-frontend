import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import cartReducer from './slices/cartSlice';
import filterReducer from './slices/filterSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    filter: filterReducer,
  },
});

export default store;
