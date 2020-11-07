import React, { useState } from 'react';
import Header from './Header';
import Products from './Products';
import Cart from './Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../CSS/App.css';

function App() {
  const [numOfItemsAdded, setNumOfItemsAdded] = useState(0);

  return (
    <>
      <Router>
        <Header numOfItemsAdded={numOfItemsAdded} />
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Products setNumOfItemsAdded={setNumOfItemsAdded} />}
          />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
