import React from 'react';
import trash from '../Pictures/trash.png';
import '../CSS/Cart.css';

function CartItem(props) {
  return (
    <div className="products__product">
      <div className="products__product-part">
        <h2>PRODUCT</h2>
        <img
          src={require(`../Pictures/Pillow${props.id}.jpg`)}
          alt={props.desc}
          width="100px"
        />
      </div>
      <div className="products__product-part">
        <h2>NAME OF PRODUCT</h2>
        <h3>{props.desc}</h3>
      </div>
      <div className="products__product-part">
        <h2>PRICE</h2>
        <h3>{props.price}</h3>
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
