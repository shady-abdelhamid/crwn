import { FC, useContext } from "react";
import { CheckoutItem } from "../../components/checkout-item/checkout-item";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.scss";

type Props = {};

const Checkout: FC<Props> = ({}) => {
  const { cartItems, cartTotal } = useContext(CartContext);

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
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <span className="checkout__total">Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
