import React from 'react';
import '../CSS/MoreInfo.css';

function MoreInfo(props) {
  if (!props.pic) return <h1>Product Not Found</h1>;
  return (
    <div className="more-info">
      <h1 className="more-info__heading">{props.desc}</h1>
      <div className="more-info__pic-desc">
        <img
          src={require(`../Pictures/Pillow${props.pic ? props.pic : 1}.jpg`)}
          width="500px"
          height="600px"
          alt={props.desc}
          className="more-info__pic"
        />
        <div className="more-info__desc">
          <h2>{props.desc}</h2>
          <h3>Price: {props.price}</h3>
          <p className="more-info__para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <button className="btn-primary">Back To Products</button>
          <button className="btn-secondary">Go To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default MoreInfo;
