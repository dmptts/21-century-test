import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './contactApi';
import searchReducer from './searchSlice';
import modalReducer from './modalSlice';

const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    search: searchReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
