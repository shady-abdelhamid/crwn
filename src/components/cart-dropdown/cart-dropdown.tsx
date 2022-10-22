import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import "./cart-dropdown.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown">
      <div className="cart-dropdown__items">
        {cartItems.map((item) => (
          <div key={item.id}>
            <CartItem {...item} />
          </div>
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
