import React from 'react';
import Stars from './Stars';

const Item = ({ product, onDelete }) => {
  const handleDelete = () => {
    onDelete(product.id);
  };

  return (
    <div className="product">
      <div className="product-image">
        <img src={product.thumbnail} alt={product.name} />
      </div>
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="product-price">${product.price}</p>
        <Stars rating={product.rating} />
      </div>
      <button className="delete-btn" onClick={handleDelete}>
        &#10006;
      </button>
    </div>
  );
};

export default Item;