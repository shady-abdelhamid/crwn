import { CartItem as Model } from "../../models/cart-item";
import { StyledCartItem, StyledImg, StyledDetails, StyledName } from "./cart-item.styles";
import "./cart-item.styles.tsx";

const CartItem = ({ name, quantity, price, imageUrl }: Model) => {
  return (
    <StyledCartItem>
      <StyledImg src={imageUrl} alt={name} />
      <StyledDetails>
        <StyledName >{name}</StyledName>
        <span>
          {quantity} x ${price}
        </span>
      </StyledDetails>
    </StyledCartItem>
  );
};

export default CartItem;
