import React, { useState } from 'react';
import CartItem from './CartItem';
import '../CSS/Cart.css';

function Cart(props) {
  if (
    !JSON.parse(localStorage.getItem('productAdded')) ||
    JSON.parse(localStorage.getItem('productAdded')).every(item => !item.added)
  )
    return <h1>Cart Is Empty</h1>;

  let items = JSON.parse(localStorage.getItem('productAdded')).filter(
    item => item.added
  );

  function removeItem(id) {
    const items = JSON.parse(localStorage.getItem('productAdded'));
    items[id].added = false;
    localStorage.setItem('productAdded', JSON.stringify(items));
    props.setNumOfItemsAdded(prev => prev - 1);
  }

  const cartItems = items.map(item => {
    return (
      <CartItem
        id={item.id}
        desc={item.desc}
        price={item.price}
        key={item.id}
        removeItem={removeItem}
      />
    );
  });

  return <div className="products">{cartItems}</div>;
}

export default Cart;
