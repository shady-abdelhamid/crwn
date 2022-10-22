import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState
} from "react";
import { CartItem } from "../models/cart-item";
import { Product } from "../models/product";

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: Product
): CartItem[] => {
  const existingItem = cartItems.find((item) => item.id === productToAdd.id);

  if (existingItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

type Type = {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  cartItems: Array<CartItem>;
  addItemToCart: (productToAdd: Product) => void;
};

export const CartContext = createContext<Type>({
  isCartOpen: false,
  setIsCartOpen: () => false,
  cartItems: [],
  addItemToCart: () => {},
});

type Props = {
  children: ReactNode;
};

export const CartProvider: FC<Props> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<Array<CartItem>>([]);

  const addItemToCart = (productToAdd: Product) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value: Type = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
