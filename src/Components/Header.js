import React from 'react';
import '../CSS/Header.css';

function Header() {
  return (
    <header>
      <div class="logo">
        <img src="" alt="logo" />
        <h2>Amazowon</h2>
      </div>
      <div class="cart">
        <img src="#" alt="cart-icon" className="cart__icon" />
        <h2 className="cart__text"></h2>
      </div>
    </header>
  );
}

export default Header;
