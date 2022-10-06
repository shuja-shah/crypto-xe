import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/configureStore';
import Home from '../Compononenets/Home';
import Header from '../Compononenets/Header';

test('renders Home component', () => {
  render(
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>,
  );
  const linkElement = screen.getByText(/Get the latest crypto prices and Details of over 50 Coins!/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Header component', () => {
  render(
    <Provider store={store}>
      <Router>
        <Header />
      </Router>
    </Provider>,
  );
  const linkElement = screen.getByText(/Crypto Exchange/i);
  expect(linkElement).toBeInTheDocument();
});
