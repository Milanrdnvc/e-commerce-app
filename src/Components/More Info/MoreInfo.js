import React, { useState } from 'react';
import Modal from '../Shared Components/Modal';
import Header from '../Shared Components/Header';
import { Link } from 'react-router-dom';
import {
  getFromLocalStorage,
  getNumOfItemsAdded,
  setToLocalStorage,
} from '../../helpers';
import '../../CSS/MoreInfo.css';

function MoreInfo() {
  const [openModal, setOpenModal] = useState(false);
  const [numOfItemsInCart, setNumOfItemsInCart] = useState(
    getNumOfItemsAdded(getFromLocalStorage('items'))
  );
  const item = getFromLocalStorage('items').filter(item => item.clicked)[0];
  const addedToCart = item.added;

  function handleAddToCart() {
    const items = getFromLocalStorage('items');
    items[item.id].added = true;
    setToLocalStorage('items', items);
    setNumOfItemsInCart(prev => prev + 1);
    setOpenModal(true);
  }

  return (
    <>
      <Header
        numOfItemsInCart={numOfItemsInCart}
        setNumOfItemsInCart={setNumOfItemsInCart}
      />
      <div className="more-info">
        <h1 className="more-info__heading">{item.desc}</h1>
        <div className="more-info__pic-desc">
          <img
            src={require(`../../Pictures/Pillow${item.id}.jpg`)}
            width="500px"
            height="600px"
            alt={item.desc}
            className="more-info__pic"
          />
          <div className="more-info__desc">
            <h2>{item.desc}</h2>
            <h3>Price: {item.price}</h3>
            <p className="more-info__para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link to="/">
              <button className="btn-primary">Back To Products</button>
            </Link>
            {addedToCart ? (
              <Link to="/cart">
                <button className="btn-secondary">Go To Cart</button>
              </Link>
            ) : (
              <button className="btn-secondary" onClick={handleAddToCart}>
                Add To Cart
              </button>
            )}
          </div>
        </div>
      </div>
      <Modal
        id={item.id}
        desc={item.desc}
        price={item.price}
        openModal={openModal}
        toggleModal={() => setOpenModal(false)}
      />
    </>
  );
}

export default MoreInfo;
