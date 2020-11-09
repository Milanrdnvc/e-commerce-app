import React from 'react';
import CartItem from './CartItem';
import '../CSS/Cart.css';

function Cart() {
  if (
    !JSON.parse(localStorage.getItem('productAdded')) ||
    JSON.parse(localStorage.getItem('productAdded')).every(item => !item.added)
  )
    return <h1>Cart Is Empty</h1>;

  const items = JSON.parse(localStorage.getItem('productAdded')).filter(
    item => item.added
  );

  const cartItems = items.map(item => {
    return (
      <CartItem
        id={item.id}
        desc={item.desc}
        price={item.price}
        key={item.id}
      />
    );
  });

  return <div className="products">{cartItems}</div>;
}

export default Cart;
