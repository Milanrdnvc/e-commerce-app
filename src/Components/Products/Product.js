import React, { useState } from 'react';
import Modal from '../Shared Components/Modal';
import { Link } from 'react-router-dom';
import { setToLocalStorage, getFromLocalStorage } from '../../helpers';
import cartImg from '../../Pictures/cart.png';

function Product({ price, desc, id, data, setInfo, setNumOfItemsInCart }) {
  const [openModal, setOpenModal] = useState(false);
  let productAdded;

  if (
    JSON.parse(localStorage.getItem('productAdded')) &&
    JSON.parse(localStorage.getItem('productAdded')).length >= data.length
  ) {
    productAdded = JSON.parse(localStorage.getItem('productAdded'))[id].added;
  } else {
    let items;
    if (!JSON.parse(localStorage.getItem('productAdded'))) items = [];
    else items = JSON.parse(localStorage.getItem('productAdded'));
    items[id] = {
      added: false,
      id: id,
      desc: desc,
      price: price,
      total: 1,
    };
    localStorage.setItem('productAdded', JSON.stringify(items));
    productAdded = JSON.parse(localStorage.getItem('productAdded'))[id].added;
  }

  function handleAddToCart() {
    const items = JSON.parse(localStorage.getItem('productAdded'));
    items[id].added = true;
    localStorage.setItem('productAdded', JSON.stringify(items));
    setOpenModal(true);
  }

  function handleSetInfo() {
    setInfo({ id: id, desc: desc, price: price });
  }

  return (
    <>
      <Link to="/moreinfo" style={{ textDecoration: 'none', color: 'black' }}>
        <div className="products-grid__product" onClick={handleSetInfo}>
          <img
            src={require(`../../Pictures/Pillow${id}.jpg`)}
            alt={desc}
            width="300px"
            height="300px"
          />
          <div className="products-grid__text">
            <h3>{desc}</h3>
            <h3>{price}</h3>
          </div>
          {!productAdded ? (
            <Link to="/">
              <div
                className="products-grid__add-to-cart"
                onClick={handleAddToCart}
                id={id}
              >
                <img src={cartImg} alt="cart" width="80px" />
                <h3>Add To Cart</h3>
              </div>
            </Link>
          ) : (
            <Link to="/cart">
              <div className="products-grid__add-to-cart" id={id}>
                <img src={cartImg} alt="cart" width="80px" />
                <h3>Go To Cart</h3>
              </div>
            </Link>
          )}
        </div>
      </Link>
      <Modal
        id={id}
        desc={desc}
        price={price}
        openModal={openModal}
        toggleModal={() => setOpenModal(false)}
      />
    </>
  );
}

export default Product;
