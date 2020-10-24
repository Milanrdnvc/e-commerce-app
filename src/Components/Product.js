import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';
import { data } from '../data';
import cartImg from '../Pictures/cart.png';

function Product(props) {
  const openModal = useRef(true);

  function toggleModal(e) {
    let id;

    if (e.target.nodeName === 'H3' || e.target.nodeName === 'IMG') {
      id = e.target.parentElement.id;
    } else {
      id = e.target.id;
    }

    const selectedItem = data.find(item => item.key === id);

    if (openModal.current) {
      ReactDOM.render(
        <Modal
          toggleModal={toggleModal}
          img={selectedItem.key}
          desc={selectedItem.desc}
          price={selectedItem.price}
        />,
        document.querySelector('.modal')
      );
    } else {
      ReactDOM.render(null, document.querySelector('.modal'));
    }

    openModal.current = !openModal.current;
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
          onClick={toggleModal}
          id={props.id}
        >
          <img src={cartImg} alt="cart" width="80px" />
          <h3>Add To Cart</h3>
        </div>
      </div>
    </>
  );
}

export default Product;
