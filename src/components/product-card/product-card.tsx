import "./product-card.styles.tsx";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { BUTTON_TYPE_CLASSES } from "../button/button";
import { Product } from "../../models/product";
import {
  StyledProductCard,
  IMG,
  StyledFooter,
  StyledNamme,
  StyledButton,
} from "./product-card.styles";

type Props = {
  product: Product;
};
export const ProductCard = ({ product }: Props) => {
  const { addItemToCart } = useContext(CartContext);

  const { name, price, imageUrl } = product;

  const addProductToCart = () => addItemToCart(product);

  return (
    <StyledProductCard>
      <IMG src={imageUrl} alt={`${name}`} />
      <StyledFooter>
        <StyledNamme>{name}</StyledNamme>
        <span>{price}</span>
      </StyledFooter>
      <StyledButton
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </StyledButton>
    </StyledProductCard>
  );
};
