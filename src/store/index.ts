import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './contactApi';
import searchReducer from './searchSlice';

const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
