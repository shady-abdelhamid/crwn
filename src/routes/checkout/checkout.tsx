import { FC, useContext } from "react";
import { CheckoutItem } from "../../components/checkout-item/checkout-item";
import { CartContext } from "../../contexts/cart.context";
import {
  StyledBlock,
  StyledContainer,
  StyledHeader,
  StyledTotal,
} from "./checkout.styles";
import "./checkout.styles.tsx";

const Checkout: FC = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledBlock>
          <span>Product</span>
        </StyledBlock>
        <StyledBlock>
          <span>Description</span>
        </StyledBlock>
        <StyledBlock>
          <span>Quantity</span>
        </StyledBlock>
        <StyledBlock>
          <span>Price</span>
        </StyledBlock>
        <StyledBlock>
          <span>Remove</span>
        </StyledBlock>
      </StyledHeader>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <StyledTotal>Total: ${cartTotal}</StyledTotal>
    </StyledContainer>
  );
};

export default Checkout;
