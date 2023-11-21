import React, { useState, useEffect } from 'react';
import Item from './Item'

const ProductList = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => setProducts(data.products));
    } ,[]);


  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };



  return (
<div className="product-list">
        {products.map(product => 
      <Item key={product.id} product={product} onDelete={handleDelete} />
    )}</div>
  );
};

export default ProductList;
