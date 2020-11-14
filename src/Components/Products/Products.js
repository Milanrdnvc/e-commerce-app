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

const items = data.map(item => {
  console.log(item.id);
  return { added: false, price: item.price, desc: item.desc, id: item.id };
});

setToLocalStorage('items', items);

function Products({ setInfo }) {
  console.log(getFromLocalStorage('items'));
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
        data={data}
        setInfo={setInfo}
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
