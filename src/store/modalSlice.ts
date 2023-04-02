import { createSlice } from '@reduxjs/toolkit';

const modalsSlice = createSlice({
  name: 'modal',
  initialState: {
    activeModal: {
      name: null,
      data: null,
    },
  },
  reducers: {
    openModal: (state, action) => {
      state.activeModal.name = action.payload.name;
      state.activeModal.data = action.payload.data;
    },
    closeModal: (state) => {
      state.activeModal.name = null;
      state.activeModal.data = null;
    },
  },
});

export default modalsSlice.reducer;
export const { openModal, closeModal } = modalsSlice.actions;
