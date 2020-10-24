import React, { useState } from 'react';
import Product from './Product';
import { data } from '../data.js';
import '../CSS/Products.css';

function Products() {
  const [openModal, setOpenModal] = useState(false);

  const products = data.map(item => {
    return (
      <Product
        price={item.price}
        desc={item.desc}
        key={item.key}
        id={item.key}
      />
    );
  });

  return (
    <main>
      <h1>Our Products</h1>
      <div className="products-grid">{products}</div>
      <div className="modal"></div>
    </main>
  );
}

export default Products;
