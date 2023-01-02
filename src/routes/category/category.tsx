import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/product-card/product-card";
import { Product } from "../../models/product";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
import { H2, StyledProducts } from "./category.styles";
import "./category.styles.tsx";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);

  const [products, setProducts] = useState<Array<Product>>(
    categoriesMap[category as string]
  );

  useEffect(() => {
    setProducts(categoriesMap[category as string]);
  }, [category, categoriesMap]);

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
