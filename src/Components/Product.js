import React from 'react';
import cartImg from '../Pictures/cart.png';

function Product(props) {
  return (
    <div className="products-grid__product">
      <img
        src={require(`../Pictures/Pillow${props.id}.jpg`)}
        alt={props.desc}
        width="300px"
        height="300px"
      />
      <div className="products-grid__text">
        <h3>02 Body Pillow</h3>
        <h3>{props.price}</h3>
      </div>
      <div
        className="products-grid__add-to-cart"
        onClick={() => console.log('hello')}
      >
        <img src={cartImg} alt="cart" width="80px" />
        <h3>Add To Cart</h3>
      </div>
    </div>
  );
}

export default Product;
