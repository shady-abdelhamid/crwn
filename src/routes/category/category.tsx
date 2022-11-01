import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/product-card/product-card";
import { CategoriesContext } from "../../contexts/categories.context";
import { Product } from "../../models/product";
import "./category.scss";

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
    <div className="category">
      <h2 className="category__title">{category?.toUpperCase()}</h2>
      <div className="category__products">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;
