import React from 'react';
import Product from './Product';
import { data } from '../data.js';
import '../CSS/Products.css';

function Products() {
  const products = data.map(item => {
    return (
      <Product
        price={item.price}
        desc={item.desc}
        key={item.key}
        id={item.key}
        data={data}
      />
    );
  });

  return (
    <>
      <main>
        <h1>Our Products</h1>
        <div className="products-grid">{products}</div>
      </main>
    </>
  );
}

export default Products;
