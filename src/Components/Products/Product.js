import React, { useState } from 'react';
import Modal from '../Shared Components/Modal';
import { Link } from 'react-router-dom';
import { setToLocalStorage, getFromLocalStorage } from '../../helpers';
import cartImg from '../../Pictures/cart.png';

function Product({ price, desc, id, setNumOfItemsInCart }) {
  const [openModal, setOpenModal] = useState(false);
  const productAdded = getFromLocalStorage('items')[id].added;

  function handleAddToCart() {
    const items = getFromLocalStorage('items');
    items[id].added = true;
    setToLocalStorage('items', items);
    setNumOfItemsInCart(prev => prev + 1);
    setOpenModal(true);
  }

  function updateClickedInLocalStorage() {
    const items = getFromLocalStorage('items');
    const newItems = items.map(item => {
      return item.id !== id
        ? { ...item, clicked: false }
        : { ...item, clicked: true };
    });
    setToLocalStorage('items', newItems);
  }

  return (
    <>
      <Link to="/moreinfo" style={{ textDecoration: 'none', color: 'black' }}>
        <div
          className="products-grid__product"
          onClick={updateClickedInLocalStorage}
        >
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
