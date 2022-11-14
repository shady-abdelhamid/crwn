import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { Product } from "../models/product";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";


interface CategoryMap {
  [title: string] : Array<Product>;
} 

type ContextType = {
  categoryMap: CategoryMap;
};

export const CategoriesContext = createContext<ContextType>({
  categoryMap: {},
});

type Props = { children: ReactNode };

export const CategoriesProvider: FC<Props> = ({ children }) => {
  const [categoryMap, setCategoryMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      
      setCategoryMap(categoriesMap);      
    }
    getCategoriesMap();
    
  }, []);

  const value = { categoryMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
