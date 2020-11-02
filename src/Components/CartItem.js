import React from 'react';
import test from '../Pictures/Pillow8.jpg';
import trash from '../Pictures/trash.png';
import '../CSS/Cart.css';

function CartItem() {
  return (
    <div className="products__product">
      <div className="products__product-part">
        <h2>PRODUCT</h2>
        <img src={test} alt="Speedwagon Body Pillow" width="100px" />
      </div>
      <div className="products__product-part">
        <h2>NAME OF PRODUCT</h2>
        <h3>Test Body Pillow</h3>
      </div>
      <div className="products__product-part">
        <h2>PRICE</h2>
        <h3>10$</h3>
      </div>
      <div className="products__product-part">
        <h2>QUANTITY</h2>
        <div className="products__inc-dec">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </div>
      <div className="products__product-part">
        <h2>REMOVE</h2>
        <img
          src={trash}
          alt="Trash can icon"
          width="70px"
          className="products__delete"
        />
      </div>
      <div className="products__product-part">
        <h2>TOTAL</h2>
        <h3>Item Total: $10</h3>
      </div>
    </div>
  );
}

export default CartItem;
