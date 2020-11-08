import React, { useState } from 'react';
import Header from './Header';
import Products from './Products';
import Cart from './Cart';
import MoreInfo from './MoreInfo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../CSS/App.css';

function App() {
  const [numOfItemsAdded, setNumOfItemsAdded] = useState(0);
  const [{ pic, desc, price }, setInfo] = useState({});

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
          <Route path="/cart" component={Cart} />
          <Route
            path="/moreinfo"
            render={() => <MoreInfo pic={pic} desc={desc} price={price} />}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
