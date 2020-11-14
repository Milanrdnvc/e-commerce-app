import React, { useState } from 'react';
import Products from './Products/Products';
import Cart from './Cart/Cart';
import MoreInfo from './More Info/MoreInfo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../CSS/App.css';

function App() {
  const [{ id, desc, price }, setInfo] = useState({});

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Products setInfo={setInfo} />} />
          <Route path="/cart" render={() => <Cart />} />
          <Route path="/moreinfo" render={() => <MoreInfo />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
