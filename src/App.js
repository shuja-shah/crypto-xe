import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Compononenets/Header';
import Home from './Compononenets/Home';
import Details from './Compononenets/Details';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}
