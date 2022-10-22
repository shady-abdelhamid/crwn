import { useContext } from "react";
import { ProductCard } from "../../components/product-card/product-card";
import { ProductsContext } from "../../contexts/products.context";
import "./shop.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
