import React from "react";
import "./Card.css";

const Card = ({ image, name, price }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h3 className="card-name">{name}</h3>
        <p className="card-price">${price}</p>
        <button className="card-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
