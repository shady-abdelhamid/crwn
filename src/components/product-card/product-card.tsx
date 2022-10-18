import "./product-card.scss";

import React from "react";
import Button from "../button/button.component";

export const ProductCard = ({ product }: any) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card">
      <img src={imageUrl} alt={`${name}`} />
      <div className="product-card__footer">
        <span className="product-card__name">{name}</span>
        <span className="product-card__price">{price}</span>
      </div>
      <Button buttonType="inverted">Add to Cart</Button>
    </div>
  );
};
