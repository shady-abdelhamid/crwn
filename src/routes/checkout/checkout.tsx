import { FC, useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartItem } from "../../models/cart-item";
import "./checkout.scss";

type Props = {};

const Checkout: FC<Props> = ({}) => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div className="checkout">
      <div className="checkout__header">
        <div className="checkout__block">
          <span>Product</span>
        </div>
        <div className="checkout__block">
          <span>Description</span>
        </div>
        <div className="checkout__block">
          <span>Quantity</span>
        </div>
        <div className="checkout__block">
          <span>Price</span>
        </div>
        <div className="checkout__block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => {
        const { id, name, quantity, imageUrl } = item;
        return (
          <div key={id}>
            <img src={imageUrl} alt={name} />
            <h2>{name}</h2>
            <span>{quantity}</span>
            <br />
            <span onClick={() => removeItemFromCart(item)}>decrement</span>
            <br />
            <span onClick={() => addItemToCart(item)}>increment</span>
          </div>
        );
      })}
      <span className="checkout__total">Total: 0</span>
    </div>
  );
};

export default Checkout;
