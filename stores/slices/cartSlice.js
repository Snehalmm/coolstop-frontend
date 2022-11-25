import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    cartDetails: {},
  },
  reducers: {
    addProduct(state, action) {
      const { id, qty } = action.payload;
      const findObj = state.cartItems.find((item) => item.id === id);

      let arr = [];
      if (findObj) {
        arr = state.cartItems.map((item) =>
          item.id === id
            ? {
                ...item,
                qty: item.qty + qty,
                total: (item.qty + qty) * item.csp,
              }
            : item
        );
      } else {
        arr = [...state.cartItems, action.payload];
      }

      state.cartItems = arr;
      localStorage.setItem('products', JSON.stringify(arr));
    },
    updateProduct(state, action) {
      state.cartItems = action.payload;
      localStorage.setItem('products', JSON.stringify(action.payload));
    },
    updateProductQty(state, action) {
      const { id, qty, sign } = action.payload;
      let updatedData = [...state.cartItems];

      if (sign === 'plus') {
        updatedData = state.cartItems.map((item) =>
          item.id === id ? { ...item, qty: qty, total: item.csp * qty } : item
        );
      } else {
        updatedData = state.cartItems.map((item) =>
          item.id === id ? { ...item, qty: qty, total: item.csp * qty } : item
        );
      }

      state.cartItems = updatedData;
      localStorage.setItem('products', JSON.stringify(updatedData));
    },
    removeProduct(state, action) {
      const { id } = action.payload;
      const excartItem = [...state.cartItems];
      const findIndex = excartItem.findIndex((item) => item.id == id);
      excartItem.splice(findIndex, 1);
      state.cartItems = excartItem;
      // state.cartDetails = {};
      localStorage.setItem('products', JSON.stringify(excartItem));
    },
    addCartDetails(state, action) {
      const { subTotal } = action.payload;
      const cartObj = {
        subTotal: Number(subTotal),
        shippingCharge: 37.45,
        totalAmt: Number(subTotal) + 37.45,
      };
      state.cartDetails = cartObj;
      localStorage.setItem('cartDetails', JSON.stringify(cartObj));
    },
    updateCartDetails(state, action) {
      state.cartDetails = action.payload;
      localStorage.setItem('cartDetails', JSON.stringify(action.payload));
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
