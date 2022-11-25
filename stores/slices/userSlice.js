import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
  name: 'user',
  initialState: {
    userDetails: {},
  },
  reducers: {
    adduser(state, action) {
      state.userDetails = action.payload;
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice.reducer;
