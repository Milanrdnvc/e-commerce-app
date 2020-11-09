import React from 'react';
import CartItem from './CartItem';
import '../CSS/Cart.css';

function Cart() {
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
