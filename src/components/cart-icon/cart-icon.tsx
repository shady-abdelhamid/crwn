import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon__container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="cart-icon" />
      <span className="cart-icon__count">0</span>
    </div>
  );
};

export default CartIcon;
