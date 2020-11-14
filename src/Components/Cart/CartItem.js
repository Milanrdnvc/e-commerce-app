import React, { useState } from 'react';
import { getFromLocalStorage, setToLocalStorage } from '../../helpers';
import trash from '../../Pictures/trash.png';
import '../../CSS/Cart.css';

function CartItem({
  id,
  desc,
  price,
  removeItem,
  setSubtotal,
  calculateSubtotal,
}) {
  const total = getFromLocalStorage('items')[id].total;
  const [quantity, setQuantity] = useState(total);
  const items = getFromLocalStorage('items');

  function increment() {
    items[id].total = quantity + 1;
    setToLocalStorage('items', items);
    const addedItems = getFromLocalStorage('items').filter(item => item.added);
    setSubtotal(calculateSubtotal(addedItems));
    setQuantity(prev => prev + 1);
  }

  function decrement() {
    if (quantity <= 1) return;
    items[id].total = quantity - 1;
    setToLocalStorage('items', items);
    const addedItems = getFromLocalStorage('items').filter(item => item.added);
    setSubtotal(calculateSubtotal(addedItems));
    setQuantity(prev => prev - 1);
  }

  return (
    <div className="cart-items__product">
      <div className="cart-items__product-part">
        <h2>PRODUCT</h2>
        <img
          src={require(`../../Pictures/Pillow${id}.jpg`)}
          alt={desc}
          width="100px"
        />
      </div>
      <div className="cart-items__product-part">
        <h2>NAME OF PRODUCT</h2>
        <h3>{desc}</h3>
      </div>
      <div className="cart-items__product-part">
        <h2>PRICE</h2>
        <h3>{price}</h3>
      </div>
      <div className="cart-items__product-part">
        <h2>QUANTITY</h2>
        <div className="cart-items__inc-dec">
          <button onClick={decrement}>-</button>
          <span>{quantity}</span>
          <button onClick={increment}>+</button>
        </div>
      </div>
      <div className="cart-items__product-part">
        <h2>REMOVE</h2>
        <img
          src={trash}
          alt="Trash can icon"
          width="70px"
          className="cart-items__delete"
          onClick={() => removeItem(id)}
        />
      </div>
      <div className="cart-items__product-part">
        <h2>TOTAL</h2>
        <h3>Item Total: {price.slice(0, price.length - 1) * quantity}$</h3>
      </div>
    </div>
  );
}

export default CartItem;
