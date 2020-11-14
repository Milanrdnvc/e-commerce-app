import React from 'react';
import Products from './Products/Products';
import Cart from './Cart/Cart';
import MoreInfo from './More Info/MoreInfo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../CSS/App.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/cart" component={Cart} />
          <Route path="/moreinfo" component={MoreInfo} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
