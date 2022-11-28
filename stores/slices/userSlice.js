import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: {
      userDetails: {},
    },
  },
  reducers: {
    adduser(state, action) {
      state.users.userDetails = action.payload;
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice.reducer;
