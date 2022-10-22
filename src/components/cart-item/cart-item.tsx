import { CartItem as Model } from "../../models/cart-item";
import "./cart-item.scss";

const CartItem = ({ name, quantity }: Model) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{quantity}</p>
    </div>
  );
};

export default CartItem;
