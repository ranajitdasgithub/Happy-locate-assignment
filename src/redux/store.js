import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default to localStorage
import { combineReducers } from "redux";
import appSlice from "./app-slice"; // Import your existing appSlice

// Persist Configuration
const persistConfig = {
  key: "root", // Key to identify the persisted data in localStorage
  storage, // LocalStorage backend
};

// Combine reducers, since persistReducer needs to be applied to individual reducers
const rootReducer = combineReducers({
  app: appSlice.reducer, // Your appSlice reducer
});

// Create persistedReducer by applying persistReducer to your rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Avoid issues with non-serializable data in redux-persist
    }),
});

// Create persistor
const persistor = persistStore(store);

export { store, persistor };
