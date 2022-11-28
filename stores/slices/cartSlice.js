import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: {
      cartItems: [],
      cartDetails: {},
    }
  },
  reducers: {
    addProduct(state, action) {

      // for (const key of Object.keys(state)) {
      //   console.log("keys",key); // 👉️ name, age
      //   console.log("keys objjjj", state[key]); // 👉️ 'Tom', 30
      // }
      // console.log("stateee==", state)
      // const {cartItems, cartDetails} = state
      // console.log("state=====", cartItems, cartDetails)
      // cartItems=[];
      const exCartItems= [...state.cart.cartItems]
      const { id, qty } = action.payload;
      const findObj = exCartItems?.find((item) => item.id === id);

      let arr = [];
      if (findObj) {
        arr = exCartItems.map((item) =>
          item.id === id
            ? {
                ...item,
                qty: item.qty + qty,
                total: (item.qty + qty) * item.csp,
              }
            : item
        );
      } else {
        arr = [...exCartItems, action.payload];
      }

      state.cart.cartItems = arr;
      localStorage.setItem('products', JSON.stringify(arr));
    },
    updateProduct(state, action) {
      state.cart.cartItems = action.payload;
      localStorage.setItem('products', JSON.stringify(action.payload));
    },
    updateProductQty(state, action) {
      const { id, qty, sign } = action.payload;
      let updatedData = [...state.cart.cartItems];

      if (sign === 'plus') {
        updatedData = state.cart.cartItems.map((item) =>
          item.id === id ? { ...item, qty: qty, total: item.csp * qty } : item
        );
      } else {
        updatedData = state.cart.cartItems.map((item) =>
          item.id === id ? { ...item, qty: qty, total: item.csp * qty } : item
        );
      }

      state.cart.cartItems = updatedData;
      localStorage.setItem('products', JSON.stringify(updatedData));
    },
    removeProduct(state, action) {
      const { id } = action.payload;
      const excartItem = [...state.cartItems];
      const findIndex = excartItem.findIndex((item) => item.id == id);
      excartItem.splice(findIndex, 1);
      state.cart.cartItems = excartItem;
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
      state.cart.cartDetails = cartObj;
      localStorage.setItem('cartDetails', JSON.stringify(cartObj));
    },
    updateCartDetails(state, action) {
      state.cart.cartDetails = action.payload;
      localStorage.setItem('cartDetails', JSON.stringify(action.payload));
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
