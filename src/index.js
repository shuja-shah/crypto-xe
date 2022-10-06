import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import store, { persistor } from './Redux/configureStore';
import './style.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
);

setTimeout(() => {
  localStorage.clear();
  window.location.reload();
},
300000);
