import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './contactApi';

const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApi.middleware),
});

export default store;
