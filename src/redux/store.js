import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage
import appSlice from "./app-slice"; // Adjust path

// Persist Configuration
const persistConfig = {
  key: "root", // Key to identify the persisted data in localStorage
  storage, // Storage engine (localStorage in this case)
};

// Ensure we're wrapping `appSlice.reducer`
const persistedReducer = persistReducer(persistConfig, appSlice.reducer);

// Configure the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Avoid issues with non-serializable data in redux-persist
    }),
});

// Create and export persistor
const persistor = persistStore(store);

export { store, persistor };
