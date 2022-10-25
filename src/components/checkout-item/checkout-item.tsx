import * as React from "react";
import { CartItem } from "../../models/cart-item";
import "./checkout-item.scss";

type Prop = {
  cartItem: CartItem;
};

export const CheckoutItem: React.FC<Prop> = ({ cartItem }) => {
  const { id, name, imageUrl, quantity, price } = cartItem;

  return (
    <div className="checkout-item">
      <div className="checkout-item__image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="checkout-item__name">{name}</div>
      <div className="checkout-item__quantity">{quantity}</div>
      <div className="checkout-item__price">{price}</div>
      <div className="checkout-item__button">&#1005;</div>
    </div>
  );
};

export default CheckoutItem;
