import React, { useState } from 'react';
import CartItem from './CartItem';
import PayPalButton from './PayPalButton';
import '../../CSS/Cart.css';

function Cart(props) {
  let items = [];

  if (localStorage.getItem('productAdded')) {
    items = JSON.parse(localStorage.getItem('productAdded')).filter(
      item => item.added
    );
  }

  const [subtotal, setSubtotal] = useState(
    items
      .map(item => {
        return {
          price: item.price.slice(0, item.price.length - 1),
          total: item.total,
        };
      })
      .reduce((a, c) => (a += c.price * c.total), 0)
  );

  if (
    !JSON.parse(localStorage.getItem('productAdded')) ||
    JSON.parse(localStorage.getItem('productAdded')).every(item => !item.added)
  )
    return <h1>Cart Is Empty</h1>;

  function removeItem(id) {
    const items = JSON.parse(localStorage.getItem('productAdded'));
    if (id === 'all') {
      let newItems = items.map(item => ({ ...item, added: false, total: 1 }));
      localStorage.setItem('productAdded', JSON.stringify(newItems));
      props.setNumOfItemsAdded('zero');
    } else {
      items[id].added = false;
      items[id].total = 1;
      localStorage.setItem('productAdded', JSON.stringify(items));
      props.setNumOfItemsAdded(prev => prev - 1);
    }
  }

  const cartItems = items.map(item => {
    return (
      <CartItem
        id={item.id}
        desc={item.desc}
        price={item.price}
        key={item.id}
        removeItem={removeItem}
        setSubtotal={setSubtotal}
      />
    );
  });

  return (
    <div className="cart-items">
      <div className="cart-items__products">{cartItems}</div>
      <div className="cart-items__settings">
        <button className="btn-primary" onClick={() => removeItem('all')}>
          Clear Cart
        </button>
        <div className="cart-items__subtotal">Subtotal: {subtotal}</div>
        <div className="cart-items__tax">
          Tax: {(subtotal * (1 / 100)).toFixed(2)}$
        </div>
        <div className="cart-items__total">
          Total: {subtotal + subtotal * (1 / 100)}$
        </div>
        <PayPalButton
          total={subtotal + subtotal * (1 / 100)}
          removeItem={removeItem}
        />
      </div>
    </div>
  );
}

export default Cart;
