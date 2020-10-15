import React from 'react';
import pillow1 from '../Pictures/Pillow1.jpg';
import pillow2 from '../Pictures/Pillow2.jpg';
import pillow3 from '../Pictures/Pillow3.jpg';
import pillow4 from '../Pictures/Pillow4.jpg';
import pillow5 from '../Pictures/Pillow5.jpg';
import '../CSS/Products.css';

function Products() {
  return (
    <main>
      <h1>Our Products</h1>
      <div className="products-grid">
        <div className="products-grid__product">
          <img src={pillow1} alt="product-1" width="300px" height="300px" />
          <div className="products-grid__text">
            <h3>02 Body Pillow</h3>
            <h3>20$</h3>
          </div>
        </div>
        <div className="products-grid__product">
          <img src={pillow2} alt="product-1" width="300px" height="300px" />
          <div className="products-grid__text">
            <h3>Rem Body Pillow</h3>
            <h3>60$</h3>
          </div>
        </div>
        <div className="products-grid__product">
          <img src={pillow3} alt="product-1" width="300px" height="300px" />
          <div className="products-grid__text">
            <h3>Astolfo Body Pillow</h3>
            <h3>35$</h3>
          </div>
        </div>
        <div className="products-grid__product">
          <img src={pillow4} alt="product-1" width="300px" height="300px" />
          <div className="products-grid__text">
            <h3>Rias Body Pillow</h3>
            <h3>53$</h3>
          </div>
        </div>
        <div className="products-grid__product">
          <img src={pillow5} alt="product-1" width="300px" />
          <div className="products-grid__text">
            <h3>Megumin Body Pillow</h3>
            <h3>28$</h3>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Products;
