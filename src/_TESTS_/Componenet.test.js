import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/configureStore';
import Home from '../Compononenets/Home';
import Details from '../Compononenets/Details';

test('renders Home component', () => {
  render(
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>,
  );
  const linkElement = screen.getByText(/Most Popular Coins/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Details component', () => {
  render(
    <Provider store={store}>
      <Router>
        <Details />
      </Router>
    </Provider>,
  );
  const linkElement = screen.getByText(/Details/i);
  expect(linkElement).toBeInTheDocument();
});
