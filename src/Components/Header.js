import React from 'react';
import logo from '../Pictures/logo.png';
import cart from '../Pictures/cart.png';
import { Link } from 'react-router-dom';
import '../CSS/Header.css';

function Header(props) {
  let addedItems = 0;
  const items = JSON.parse(localStorage.getItem('productAdded'));

  if (items) items.forEach(item => (item.added ? addedItems++ : null));

  return (
    <header>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="logo">
          <img src={logo} alt="logo" width="50px" className="logo__picture" />
          <h2 className="logo__text">Amazowon</h2>
        </div>
      </Link>
      <Link to="/cart" style={{ textDecoration: 'none' }}>
        <div className="cart">
          <img src={cart} alt="cart-icon" className="cart__icon" width="50px" />
          <h2 className="cart__text">
            Cart{' '}
            <span className="num-of-products">
              ({items ? addedItems : props.numOfItemsAdded})
            </span>
          </h2>
        </div>
      </Link>
    </header>
  );
}

export default Header;
