import React from 'react';
import logo from '../Pictures/logo.png';
import cart from '../Pictures/cart.png';
import '../CSS/Header.css';

function Header(props) {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" width="50px" className="logo__picture" />
        <h2 className="logo__text">Amazowon</h2>
      </div>
      <div className="cart">
        <img src={cart} alt="cart-icon" className="cart__icon" width="50px" />
        <h2 className="cart__text">
          Cart <span className="num-of-products">(0)</span>
        </h2>
      </div>
    </header>
  );
}

export default Header;
