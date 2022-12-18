import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: {},
    addressDetails: {},
  },
  reducers: {
    adduser(state, action) {
      state.userDetails = action.payload;
    },
    addAddress(state, action) {
      state.addressDetails = action.payload;
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice.reducer;
