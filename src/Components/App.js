import React from 'react';
import Header from './Header';
import Products from './Products';
import Cart from './Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../CSS/App.css';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
