import React from 'react';
import "./card.scss";

const ProductCard = (props) => {
  return (
    <div className="product-card">
      {props.name}
      {props.children}
    </div>
  )
}

export default ProductCard