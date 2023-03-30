import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    contactSearchQuery: '',
  },
  reducers: {
    setContactSearchQuery: (state, action) => {
      state.contactSearchQuery = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { setContactSearchQuery } = searchSlice.actions;
