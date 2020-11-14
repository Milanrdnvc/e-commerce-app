import React, { useState } from 'react';
import trash from '../../Pictures/trash.png';
import '../../CSS/Cart.css';

function CartItem(props) {
  const total = JSON.parse(localStorage.getItem('productAdded'))[props.id]
    .total;
  const [quantity, setQuantity] = useState(total);

  function increment() {
    const items = JSON.parse(localStorage.getItem('productAdded'));
    const addedItems = items.filter(item => item.added);
    items[props.id].total = quantity + 1;
    localStorage.setItem('productAdded', JSON.stringify(items));
    props.setSubtotal(
      addedItems
        .map(item => {
          return {
            price: item.price.slice(0, item.price.length - 1),
            total: item.total,
          };
        })
        .reduce((a, c) => (a += c.price * c.total), 0)
    );
    setQuantity(prev => prev + 1);
  }

  function decrement() {
    if (quantity <= 1) return;
    const items = JSON.parse(localStorage.getItem('productAdded'));
    const addedItems = items.filter(item => item.added);
    items[props.id].total = quantity - 1;
    localStorage.setItem('productAdded', JSON.stringify(items));
    props.setSubtotal(
      addedItems
        .map(item => {
          return {
            price: item.price.slice(0, item.price.length - 1),
            total: item.total,
          };
        })
        .reduce((a, c) => (a += c.price * c.total), 0)
    );
    setQuantity(prev => prev - 1);
  }

  return (
    <div className="cart-items__product">
      <div className="cart-items__product-part">
        <h2>PRODUCT</h2>
        <img
          src={require(`../../Pictures/Pillow${props.id}.jpg`)}
          alt={props.desc}
          width="100px"
        />
      </div>
      <div className="cart-items__product-part">
        <h2>NAME OF PRODUCT</h2>
        <h3>{props.desc}</h3>
      </div>
      <div className="cart-items__product-part">
        <h2>PRICE</h2>
        <h3>{props.price}</h3>
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
          onClick={() => props.removeItem(props.id)}
        />
      </div>
      <div className="cart-items__product-part">
        <h2>TOTAL</h2>
        <h3>
          Item Total: {props.price.slice(0, props.price.length - 1) * quantity}$
        </h3>
      </div>
    </div>
  );
}

export default CartItem;
