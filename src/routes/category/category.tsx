import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/product-card/product-card";
import { CategoriesContext } from "../../contexts/categories.context";
import { Product } from "../../models/product";
import { H2, StyledProducts } from "./category.styles";
import "./category.styles.tsx";

const Category = () => {
  const { category } = useParams();
  const { categoryMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState<Array<Product>>(
    categoryMap[category as string]
  );

  useEffect(() => {
    setProducts(categoryMap[category as string]);
  }, [category, categoryMap]);

  return (
    <>
      <H2>{category?.toUpperCase()}</H2>
      <StyledProducts>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </StyledProducts>
    </>
  );
};

export default Category;
