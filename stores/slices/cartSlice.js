import { createSlice, current } from "@reduxjs/toolkit";
const cartInitialState = {
  cartDetails: {},
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addProduct(state, action) {
      const { id, qty } = action.payload;

      console.log(state.items);

      const exCartItem = state.items;
      let findObj;
      if (exCartItem?.length) {
        findObj = exCartItem?.find((item) => item.id === id);
      }

      let arr = [];
      if (findObj) {
        arr = exCartItem.map((item) =>
          item.id === id
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

      localStorage.setItem("products", JSON.stringify(arr));
    },
    updateProduct(state, action) {
      const { items } = state;

      state.items = action.payload;
      localStorage.setItem("products", JSON.stringify(action.payload));
    },
    updateProductQty(state, action) {
      const { id, qty, sign } = action.payload;
      let updatedData = [...state.items];

      if (sign === "plus") {
        updatedData = state.items.map((item) =>
          item.id === id ? { ...item, qty: qty, total: item.csp * qty } : item
        );
      } else {
        updatedData = state.items.map((item) =>
          item.id === id ? { ...item, qty: qty, total: item.csp * qty } : item
        );
      }

      state.items = updatedData;
      localStorage.setItem("products", JSON.stringify(updatedData));
    },
    removeProduct(state, action) {
      const { id } = action.payload;
      const excartItem = [...state.items];
      const findIndex = excartItem.findIndex((item) => item.id == id);
      excartItem.splice(findIndex, 1);
      state.items = excartItem;
      state.cartDetails = {};
      localStorage.setItem("products", JSON.stringify(excartItem));
    },
    addCartDetails(state, action) {
      const { subTotal } = action.payload;
      const cartObj = {
        subTotal: Number(subTotal),
        shippingCharge: 37.45,
        totalAmt: Number(subTotal) + 37.45,
      };
      state.cartDetails = cartObj;
      localStorage.setItem("cartDetails", JSON.stringify(cartObj));
    },
    updateCartDetails(state, action) {
      state.cartDetails = action.payload;
      localStorage.setItem("cartDetails", JSON.stringify(action.payload));
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
