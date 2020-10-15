import React from 'react';

function Product(props) {
  return (
    <div className="products-grid__product">
      <img src={props.img} alt="product-1" width="300px" height="300px" />
      <div className="products-grid__text">
        <h3>02 Body Pillow</h3>
        <h3>{props.price}</h3>
      </div>
    </div>
  );
}

export default Product;
