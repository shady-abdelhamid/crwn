import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { StyledCartIcon, StyledCount, StyledShoppingIcon } from "./cart-icon.styles";
import "./cart-icon.styles.tsx";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <StyledCartIcon onClick={toggleIsCartOpen}>
      <StyledShoppingIcon className="cart-icon" />
      <StyledCount>{cartCount}</StyledCount>
    </StyledCartIcon>
  );
};

export default CartIcon;
