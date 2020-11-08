import React, { useState } from 'react';
import Modal from './Modal';
import { Link } from 'react-router-dom';
import cartImg from '../Pictures/cart.png';

function Product(props) {
  const [openModal, setOpenModal] = useState(false);

  let productAdded;
  if (
    JSON.parse(localStorage.getItem('productAdded')) &&
    JSON.parse(localStorage.getItem('productAdded')).length > props.data.length
  ) {
    productAdded = JSON.parse(localStorage.getItem('productAdded'))[props.id];
  } else {
    let items;
    if (!JSON.parse(localStorage.getItem('productAdded'))) items = [];
    else items = JSON.parse(localStorage.getItem('productAdded'));
    items[props.id] = false;
    localStorage.setItem('productAdded', JSON.stringify(items));
    productAdded = JSON.parse(localStorage.getItem('productAdded'))[props.id];
  }

  function handleAddToCart() {
    const items = JSON.parse(localStorage.getItem('productAdded'));
    items[props.id] = true;
    localStorage.setItem('productAdded', JSON.stringify(items));
    props.setNumOfItemsAdded(prev => prev + 1);
    setOpenModal(true);
  }

  function handleSetInfo() {
    props.setInfo({ id: props.id, desc: props.desc, price: props.price });
  }

  return (
    <>
      <Link to="/moreinfo" style={{ textDecoration: 'none', color: 'black' }}>
        <div className="products-grid__product" onClick={handleSetInfo}>
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
          {!productAdded ? (
            <Link to="/">
              <div
                className="products-grid__add-to-cart"
                onClick={handleAddToCart}
                id={props.id}
              >
                <img src={cartImg} alt="cart" width="80px" />
                <h3>Add To Cart</h3>
              </div>
            </Link>
          ) : (
            <Link to="/cart">
              <div className="products-grid__add-to-cart" id={props.id}>
                <img src={cartImg} alt="cart" width="80px" />
                <h3>Go To Cart</h3>
              </div>
            </Link>
          )}
        </div>
      </Link>
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
