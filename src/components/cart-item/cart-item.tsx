import { CartItem as Model } from "../../models/cart-item";
import "./cart-item.scss";

const CartItem = ({ name, quantity, price, imageUrl }: Model) => {
  return (
    <div className="cart-item">
      <img className="cart-item__image" src={imageUrl} alt={name} />
      <div className="cart-item__details">
        <span className="cart-item__name">{name}</span>
        <span className="cart-item__price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
