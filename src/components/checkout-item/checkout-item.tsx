import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartItem } from "../../models/cart-item";
import { Product } from "../../models/product";
import "./checkout-item.scss";

type Prop = {
  cartItem: CartItem;
};

export const CheckoutItem: React.FC<Prop> = ({ cartItem }) => {
  const { id, name, imageUrl, quantity, price } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div className="checkout-item">
      <div className="checkout-item__image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="checkout-item__name">{name}</div>
      <div className="checkout-item__quantity">
        <span
          className="checkout-item__arrow"
          onClick={() => removeItemFromCart(cartItem)}
        >
          &#10094;
        </span>
        <span className="checkout-item__value">{quantity}</span>
        <span
          className="checkout-item__arrow"
          onClick={() => addItemToCart(cartItem)}
        >
          &#10095;
        </span>
      </div>
      <div className="checkout-item__price">${price}</div>
      <div
        className="checkout-item__remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#xD7;
      </div>
    </div>
  );
};

export default CheckoutItem;
