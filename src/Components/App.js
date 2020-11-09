import React, { useState } from 'react';
import Header from './Header';
import Products from './Products';
import Cart from './Cart';
import MoreInfo from './MoreInfo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../CSS/App.css';

function App() {
  const [numOfItemsAdded, setNumOfItemsAdded] = useState(0);
  const [{ id, desc, price }, setInfo] = useState({});

  return (
    <>
      <Router>
        <Header numOfItemsAdded={numOfItemsAdded} />
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Products
                setNumOfItemsAdded={setNumOfItemsAdded}
                setInfo={setInfo}
              />
            )}
          />
          <Route
            path="/cart"
            render={() => <Cart setNumOfItemsAdded={setNumOfItemsAdded} />}
          />
          <Route
            path="/moreinfo"
            render={() => (
              <MoreInfo
                id={id}
                desc={desc}
                price={price}
                setNumOfItemsAdded={setNumOfItemsAdded}
              />
            )}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
