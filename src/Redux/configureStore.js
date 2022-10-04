import { combineReducers, configureStore } from '@reduxjs/toolkit';
import coinsReducer from './coins/coins';

const rootReducer = combineReducers({
  coins: coinsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
