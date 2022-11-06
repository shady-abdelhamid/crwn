import "./category-preview.styles.tsx";

import { FC } from "react";
import { Product } from "../../models/product";
import { ProductCard } from "../product-card/product-card";
import {
  StyledCategoryPreview,
  StyledLink,
  StyledProducts,
} from "./category-preview.styles";

type Props = {
  title: string;
  products: Array<Product>;
};

const CategoryPreview: FC<Props> = ({ title, products }) => {
  return (
    <StyledCategoryPreview>
      <h2>
        <StyledLink to={title}>{title.toUpperCase()}</StyledLink>
      </h2>
      <StyledProducts>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </StyledProducts>
    </StyledCategoryPreview>
  );
};

export default CategoryPreview;
