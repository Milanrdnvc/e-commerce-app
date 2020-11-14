import React, { useState } from 'react';
import Product from './Product';
import Header from '../Shared Components/Header';
import {
  getFromLocalStorage,
  getNumOfItemsAdded,
  setToLocalStorage,
} from '../../helpers.js';
import { data } from '../../data.js';
import '../../CSS/Products.css';

let items;
if (!getFromLocalStorage('items')) {
  items = data.map(item => {
    return {
      added: false,
      price: item.price,
      desc: item.desc,
      id: item.id,
      total: 1,
      clicked: false,
    };
  });
  setToLocalStorage('items', items);
} else items = getFromLocalStorage('items');

function Products() {
  const [numOfItemsInCart, setNumOfItemsInCart] = useState(
    getNumOfItemsAdded(getFromLocalStorage('items'))
  );

  const products = data.map(item => {
    return (
      <Product
        price={item.price}
        desc={item.desc}
        key={item.id}
        id={item.id}
        setNumOfItemsInCart={setNumOfItemsInCart}
      />
    );
  });

  return (
    <>
      <Header
        numOfItemsInCart={numOfItemsInCart}
        setNumOfItemsInCart={setNumOfItemsInCart}
      />
      <main>
        <h1>Our Products</h1>
        <div className="products-grid">{products}</div>
      </main>
    </>
  );
}

export default Products;
