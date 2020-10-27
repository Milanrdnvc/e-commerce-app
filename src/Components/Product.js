import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';
import cartImg from '../Pictures/cart.png';

let numOfItemsAdded = 0;

function Product(props) {
  const [openModal, setOpenModal] = useState(false);

  function handleAddToCart() {
    numOfItemsAdded++;
    ReactDOM.render(
      <span>({numOfItemsAdded})</span>,
      document.querySelector('.num-of-products')
    );
    setOpenModal(true);
  }

  return (
    <>
      <div className="products-grid__product">
        <img
          src={require(`../Pictures/Pillow${props.id}.jpg`)}
          alt={props.desc}
          width="300px"
          height="300px"
        />
        <div className="products-grid__text">
          <h3>{props.desc}</h3>
          <h3>{props.price}</h3>
        </div>
        <div
          className="products-grid__add-to-cart"
          onClick={handleAddToCart}
          id={props.id}
        >
          <img src={cartImg} alt="cart" width="80px" />
          <h3>Add To Cart</h3>
        </div>
      </div>
      <Modal
        id={props.id}
        desc={props.desc}
        price={props.price}
        openModal={openModal}
        toggleModal={() => setOpenModal(false)}
      />
    </>
  );
}

export default Product;
