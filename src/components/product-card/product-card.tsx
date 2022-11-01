import "./product-card.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button";
import { Product } from "../../models/product";

 type Props = {
  product: Product;
}
export const ProductCard = ({ product }: Props) => {
  const { addItemToCart } = useContext(CartContext);

  const { name, price, imageUrl } = product;

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card">
      <img src={imageUrl} alt={`${name}`} />
      <div className="product-card__footer">
        <span className="product-card__name">{name}</span>
        <span className="product-card__price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </div>
  );
};
