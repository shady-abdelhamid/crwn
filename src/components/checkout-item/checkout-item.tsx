import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartItem } from "../../models/cart-item";
import { Product } from "../../models/product";
import {
  StyledArrow,
  StyledCheckoutItem,
  StyledImage,
  StyledRemoveBtn,
  StyledValue,
  StyledContainer,
} from "./checkout-item.styles";
import "./checkout-item.styles.tsx";

type Prop = {
  cartItem: CartItem;
};

export const CheckoutItem: React.FC<Prop> = ({ cartItem }) => {
  const { id, name, imageUrl, quantity, price } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <StyledCheckoutItem>
      <StyledImage>
        <img src={imageUrl} alt={name} />
      </StyledImage>
      <StyledContainer>{name}</StyledContainer>
      <StyledContainer>
        <StyledArrow onClick={() => removeItemFromCart(cartItem)}>
          &#10094;
        </StyledArrow>
        <StyledValue>{quantity}</StyledValue>
        <StyledArrow onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </StyledArrow>
      </StyledContainer>
      <StyledContainer>${price}</StyledContainer>
      <StyledRemoveBtn onClick={() => clearItemFromCart(cartItem)}>
        &#xD7;
      </StyledRemoveBtn>
    </StyledCheckoutItem>
  );
};

export default CheckoutItem;
