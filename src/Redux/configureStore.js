import { combineReducers, configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import coinsReducer from './coins/coins';
import detailsReducer from './details/details';

const persistConfig = {
  key: 'main-root',
  storage,
};

const rootReducer = combineReducers({
  coins: coinsReducer,
  details: detailsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
}, applyMiddleware);

const persistor = persistStore(store);
export { persistor };

export default store;
