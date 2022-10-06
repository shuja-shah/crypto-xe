import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/configureStore';
import Home from '../Compononenets/Home';

test('renders Home component', () => {
  render(
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>,
  );
  const linkElement = screen.getByText(/Crypto Exchange/i);
  expect(linkElement).toBeInTheDocument();
});
