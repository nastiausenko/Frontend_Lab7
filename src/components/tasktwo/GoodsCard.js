import React from 'react';
import './GoodsCard.css'

function GoodsCard({ image, name, price }) {
  return (
    <div className="goods-card">
      <img src={image} alt={name} className="goods-card-image" />
      <h3 className="goods-card-name">{name}</h3>
      <p className="goods-card-price">{price} UAH</p>
    </div>
  );
}

export default GoodsCard;
