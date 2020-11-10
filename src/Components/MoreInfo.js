import React, { useState } from 'react';
import Modal from './Modal';
import { Link } from 'react-router-dom';
import '../CSS/MoreInfo.css';

function MoreInfo(props) {
  const [openModal, setOpenModal] = useState(false);
  let id, desc, price;

  function setPreviousState() {
    if (localStorage.getItem('moreInfoState')) {
      id = JSON.parse(localStorage.getItem('moreInfoState')).id;
      desc = JSON.parse(localStorage.getItem('moreInfoState')).desc;
      price = JSON.parse(localStorage.getItem('moreInfoState')).price;
    }
  }

  if (!props.id) setPreviousState();
  else {
    localStorage.setItem(
      'moreInfoState',
      JSON.stringify({ id: props.id, desc: props.desc, price: props.price })
    );
  }

  let addedToCart;
  if (localStorage.getItem('productAdded')) {
    addedToCart = JSON.parse(localStorage.getItem('productAdded'))[
      props.id ? props.id : id
    ].added;
  }

  function handleAddToCart() {
    const items = JSON.parse(localStorage.getItem('productAdded'));
    items[props.id ? props.id : id] = {
      added: true,
      id: props.id ? props.id : id,
      desc: props.desc ? props.desc : desc,
      price: props.price ? props.price : price,
      total: 1,
    };
    localStorage.setItem('productAdded', JSON.stringify(items));
    props.setNumOfItemsAdded(prev => prev + 1);
    setOpenModal(true);
  }

  return (
    <>
      <div className="more-info">
        <h1 className="more-info__heading">{props.desc ? props.desc : desc}</h1>
        <div className="more-info__pic-desc">
          <img
            src={require(`../Pictures/Pillow${props.id ? props.id : id}.jpg`)}
            width="500px"
            height="600px"
            alt={props.desc ? props.desc : desc}
            className="more-info__pic"
          />
          <div className="more-info__desc">
            <h2>{props.desc ? props.desc : desc}</h2>
            <h3>Price: {props.price ? props.price : price}</h3>
            <p className="more-info__para">
              best girl best girl best girl best girl best girl best girl best
              girl best girl best girl best girl best girl best girl best girl
              best girl best girl best girl best girl best girl best girl best
              girl best girl best girl best girl best girl best girl best girl
              best girl best girl best girl best girl best girl best girl best
              girl best girl best girl best girl best girl best girl best girl
              best girl best girl best girl best girl best girl best girl best
              girl best girl best girl best girl best girl best girl best girl
              best girl best girl best girl best girl best girl best girl best
              girl best girl best girl best girl best girl best girl best girl
              best girl best girl best girl best girl best girl best girl best
              girl
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
        id={props.id ? props.id : id}
        desc={props.desc ? props.desc : desc}
        price={props.price ? props.price : price}
        openModal={openModal}
        toggleModal={() => setOpenModal(false)}
      />
    </>
  );
}

export default MoreInfo;
