import React from 'react';
import ReactDOM from 'react-dom';
import '../CSS/Modal.css';

function Modal(props) {
  if (!props.openModal) return null;
  return ReactDOM.createPortal(
    <>
      <div className="blur-bg"></div>
      <div className="added-to-cart-modal">
        <h3>Item Added To Cart</h3>
        <img
          src={require(`../Pictures/Pillow${props.id}.jpg`)}
          alt={props.desc}
        />
        <h3>{props.desc}</h3>
        <h3>Price: {props.price}</h3>
        <button
          className="added-to-cart-modal__btn-continue-shopping"
          onClick={props.toggleModal}
        >
          Continue Shopping
        </button>
        <button className="added-to-cart-modal__btn-go-to-cart">
          Go To Cart
        </button>
      </div>
    </>,
    document.querySelector('.modal')
  );
}

export default Modal;
