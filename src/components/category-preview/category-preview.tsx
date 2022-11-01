import "./category-preview.scss";

import { FC } from "react";
import { Product } from "../../models/product";
import { ProductCard } from "../product-card/product-card";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  products: Array<Product>;
};

const CategoryPreview: FC<Props> = ({ title, products }) => {
  return (
    <div className="category-preview">
      <h2>
        <Link className="category-preview__title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="category-preview__products">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
