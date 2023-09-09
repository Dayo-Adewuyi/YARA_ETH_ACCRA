import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { yaraApi } from "./api";
import authReducer from "./authSlice"

export const store = configureStore({
  reducer: {
    [yaraApi.reducerPath]: yaraApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(yaraApi.middleware),
});


setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
