import React from 'react';
import pillow1 from '../Pictures/Pillow1.jpg';
import '../CSS/Products.css';

function Products() {
  return (
    <main>
      <h1>Our Products</h1>
      <div className="products-grid">
        <div className="products-grid__product">
          <img src={pillow1} alt="product-1" width="350px" />
          <div className="products-grid__text">
            <h3>Product Name</h3>
            <h3>10000$</h3>
          </div>
        </div>
        <div className="products-grid__product">
          <img src={pillow1} alt="product-1" width="350px" />
          <div className="products-grid__text">
            <h3>Product Name</h3>
            <h3>10000$</h3>
          </div>
        </div>
        <div className="products-grid__product">
          <img src={pillow1} alt="product-1" width="350px" />
          <div className="products-grid__text">
            <h3>Product Name</h3>
            <h3>10000$</h3>
          </div>
        </div>
        <div className="products-grid__product">
          <img src={pillow1} alt="product-1" width="350px" />
          <div className="products-grid__text">
            <h3>Product Name</h3>
            <h3>10000$</h3>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Products;
