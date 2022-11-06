import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import { StyledCartDropdown, StyledCartItems, StyledEmptyMessage } from "./cart-dropdown.styles";
import "./cart-dropdown.styles.tsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <StyledCartDropdown>
      <StyledCartItems>
        {cartItems.length ? (
          cartItems.map((item) => (
            <div key={item.id}>
              <CartItem {...item} />
            </div>
          ))
        ) : (
          <StyledEmptyMessage>Your cart is emprty</StyledEmptyMessage>
        )}
      </StyledCartItems>
      <Button onClick={() => navigate("/checkout")}>GO TO CHECKOUT</Button>
    </StyledCartDropdown>
  );
};

export default CartDropdown;
