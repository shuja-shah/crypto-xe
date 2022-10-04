import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import App from './App';
import store from './Redux/configureStore';
import './style.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
