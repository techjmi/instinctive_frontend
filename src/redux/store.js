import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import studentReducer from './studentSlice.js';
import userReducer from './userSlice.js';

// Persist configuration
const persistConfig = {
  key: 'root', 
  storage, 
};

// Persist userReducer
const persistedUserReducer = persistReducer(persistConfig, userReducer);

// Configure the store
export const store = configureStore({
  reducer: {
    student: studentReducer,
    user: persistedUserReducer, 
  },
});
export const persistor = persistStore(store);
