import {
  saveToStorage,
  getFromStorage,
  deleteFromStorage,
} from "../../utils/storage";

import { createSlice } from "@reduxjs/toolkit";
const cartInitialState = {
  totalProducts: null,
  cartDetails: {},
  items: [],
  orderDetails: {},
  discountDetails: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addProduct(state, action) {
      const { slug, qty } = action.payload;

      const exCartItem = state.items;
      let findObj;
      if (exCartItem?.length) {
        findObj = exCartItem?.find((item) => item.slug === slug);
      }

      let arr = [];
      if (findObj) {
        arr = exCartItem.map((item) =>
          item.slug === slug
            ? {
                ...item,
                qty: item.qty + qty,
                total: (item.qty + qty) * item.csp,
              }
            : item
        );
      } else {
        arr = exCartItem?.length
          ? [...exCartItem, action.payload]
          : [action.payload];
      }

      state.items = arr;

      let totalItems = 0;

      arr.forEach((product) => {
        totalItems = totalItems + +product.qty;
      });

      state.totalProducts = totalItems;

      saveToStorage("products", arr);
    },
    updateProduct(state, action) {
      const { items } = state;
      state.items = action.payload;

      let totalItems = 0;

      action.payload?.forEach((product) => {
        totalItems = totalItems + +product.qty;
      });

      state.totalProducts = totalItems;
      saveToStorage("products", action.payload);
    },
    updateProductQty(state, action) {
      const { slug, qty, sign } = action.payload;
      let updatedData = [...state.items];

      if (sign === "plus") {
        updatedData = state.items.map((item) => {
          if (item.slug === slug) {
            state.totalProducts = state.totalProducts - +item.qty;
            state.totalProducts = state.totalProducts + +qty;
            return { ...item, qty: qty, total: item.csp * qty };
          } else {
            return item;
          }
        });
      } else {
        updatedData = state.items.map((item) => {
          if (item.slug === slug) {
            state.totalProducts = state.totalProducts - +item.qty;
            state.totalProducts = state.totalProducts + +qty;
            return { ...item, qty: qty, total: item.csp * qty };
          } else {
            return item;
          }
        });
      }

      state.items = updatedData;
      saveToStorage("products", updatedData);
    },
    removeProduct(state, action) {
      const { slug } = action.payload;
      const excartItem = [...state.items];
      const findIndex = excartItem.findIndex((item) => item.slug == slug);

      excartItem.forEach((product, index) => {
        if (index === findIndex) {
          state.totalProducts = state.totalProducts - +product.qty;
        }
      });
      excartItem.splice(findIndex, 1);
      state.items = excartItem;
      state.cartDetails = {};
      saveToStorage("products", excartItem);
    },
    addCartDetails(state, action) {
      const { subTotal, finalAmt } = action.payload;
      const cartObj = {
        subTotal: Number(subTotal),
        shippingCharge: 0,
        totalAmt: Number(subTotal) + 0,
        finalAmt: finalAmt,
      };
      state.cartDetails = cartObj;
      saveToStorage("cartDetails", cartObj);
    },
    updateCartDetails(state, action) {
      state.cartDetails = action.payload;
      saveToStorage("cartDetails", action.payload);
    },
    saveOrderDetails(state, action) {
      state.orderDetails = action.payload;
      saveToStorage("orderDetails", action.payload);
    },
    discountDetails(state, action) {
      state.discountDetails = action.payload;
    },
    updateTotalProducts(state, action) {
      state.totalProducts = +action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
