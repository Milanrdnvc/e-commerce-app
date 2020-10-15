import React from 'react';
import pillow1 from '../Pictures/Pillow1.jpg';
import pillow2 from '../Pictures/Pillow2.jpg';
import pillow3 from '../Pictures/Pillow3.jpg';
import pillow4 from '../Pictures/Pillow4.jpg';
import pillow5 from '../Pictures/Pillow5.jpg';
import Product from './Product';
import '../CSS/Products.css';

const DATA = [
  { src: pillow1, price: '20$' },
  { src: pillow2, price: '60$' },
  { src: pillow3, price: '45$' },
  { src: pillow4, price: '37$' },
  { src: pillow5, price: '44$' },
];

function Products() {
  const products = DATA.map(item => {
    return <Product img={item.src} price={item.price} />;
  });

  return (
    <main>
      <h1>Our Products</h1>
      <div className="products-grid">{products}</div>
    </main>
  );
}

export default Products;
