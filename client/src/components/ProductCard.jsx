// Layout/content of product card(s)
// Displays product info such as name, cost, and product image
import React from 'react';

const ProductCard = ({ name, cost, imageUrl }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="product-cost">${cost}</p>
    </div>
  );
};

export default ProductCard;