import React, { useState } from 'react';
import CartItem from './CartItem';
import PayPalButton from './PayPalButton';
import Header from '../Shared Components/Header';
import {
  getFromLocalStorage,
  getNumOfItemsAdded,
  setToLocalStorage,
} from '../../helpers';
import '../../CSS/Cart.css';

function calculateSubtotal(items) {
  return items
    .map(item => {
      return {
        price: item.price.slice(0, item.price.length - 1),
        total: item.total,
      };
    })
    .reduce((a, c) => (a += c.price * c.total), 0);
}

function Cart() {
  const [numOfItemsInCart, setNumOfItemsInCart] = useState(
    getNumOfItemsAdded(getFromLocalStorage('items'))
  );
  const addedItems = getFromLocalStorage('items').filter(item => item.added);
  const [subtotal, setSubtotal] = useState(calculateSubtotal(addedItems));

  if (addedItems.length === 0)
    return (
      <>
        <Header
          numOfItemsInCart={numOfItemsInCart}
          setNumOfItemsInCart={setNumOfItemsInCart}
        />
        <h1 className="cart-items">Cart is empty.</h1>
      </>
    );

  function removeItem(id) {
    const items = getFromLocalStorage('items');
    if (id === 'all') {
      const newItems = items.map(item => ({ ...item, added: false, total: 1 }));
      setToLocalStorage('items', newItems);
      setNumOfItemsInCart(0);
    } else {
      items[id].added = false;
      items[id].total = 1;
      setToLocalStorage('items', items);
      setNumOfItemsInCart(prev => prev - 1);
    }
  }

  const cartItems = addedItems.map(item => {
    return (
      <CartItem
        id={item.id}
        desc={item.desc}
        price={item.price}
        key={item.id}
        removeItem={removeItem}
        setSubtotal={setSubtotal}
        addedItems={addedItems}
        calculateSubtotal={calculateSubtotal}
      />
    );
  });

  return (
    <>
      <Header
        numOfItemsInCart={numOfItemsInCart}
        setNumOfItemsInCart={setNumOfItemsInCart}
      />
      <div className="cart-items">
        <div className="cart-items__products">{cartItems}</div>
        <div className="cart-items__settings">
          <button className="btn-primary" onClick={() => removeItem('all')}>
            Clear Cart
          </button>
          <div className="cart-items__subtotal">Subtotal: {subtotal}$</div>
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
    </>
  );
}

export default Cart;
