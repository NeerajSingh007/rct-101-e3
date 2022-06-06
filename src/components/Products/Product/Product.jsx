import React, { useState } from "react";

const Product = ({product}) => {
  // Note: this id should come from api
  const [count,setCount] = useState(0)
  
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{product.name}</h3>
      <h6 data-cy="product-description">{product.description}</h6>
      <button data-cy="product-add-item-to-cart-button">Add Products</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={()=>setCount(count+1)}>+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
            count
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={()=>setCount(count-1)}>-</button>
        <button data-cy="product-remove-cart-item-button">Remove From Cart</button>
      </div>
    </div>
  );
};

export default Product;
