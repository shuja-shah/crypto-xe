import { combineReducers, configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import coinsReducer from './coins/coins';

const persistConfig = {
  key: 'main-root',
  storage,
};

const rootReducer = combineReducers({
  coins: coinsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
}, applyMiddleware);

const persistor = persistStore(store);
export { persistor };

export default store;
