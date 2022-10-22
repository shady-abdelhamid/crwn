import { createContext, FC, ReactNode, useState } from "react";
import { Product } from "../models/product";
import PRODUCTS from "../shop-data.json";

type ContextType = {
  products: Array<Product>;
};

export const ProductsContext = createContext<ContextType>({
  products: [],
});

type Props = { children: ReactNode };

export const ProductsProvider: FC<Props> = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
