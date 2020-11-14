import React from 'react';
import Product from './Product';
import { data } from '../data.js';
import '../CSS/Products.css';

function Products(props) {
  const products = data.map(item => {
    return (
      <Product
        price={item.price}
        desc={item.desc}
        key={item.key}
        id={item.key}
        data={data}
        setNumOfItemsAdded={props.setNumOfItemsAdded}
        setInfo={props.setInfo}
      />
    );
  });

  return (
    <>
      <main>
        <h1>Hello</h1>
        <div className="products-grid">{products}</div>
      </main>
    </>
  );
}

export default Products;
