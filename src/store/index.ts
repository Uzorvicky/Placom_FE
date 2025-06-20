// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import {
  // persistReducer,
  persistStore,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from "reduxjs-toolkit-persist";
// Authentication & Navigation
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    // Authentication & Navigation
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

// Re-export hooks from hooks.ts
export { useAppDispatch, useAppSelector } from "./hooks";
