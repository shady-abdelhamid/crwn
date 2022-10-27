import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
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

const removeCartItem = (cartItems: CartItem[], itemTobeRemoved: CartItem) => {
  const existingItem = cartItems.find((item) => item.id === itemTobeRemoved.id);

  if (existingItem?.quantity === 1) {
    return cartItems.filter((item) => item.id !== itemTobeRemoved.id);
  }

  return cartItems.map((item) =>
    item.id === itemTobeRemoved.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const clearCartItem = (cartItems: CartItem[], itemTobeCleared: CartItem) => {
  return cartItems.filter((item) => item.id !== itemTobeCleared.id);
};

type Type = {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  cartItems: Array<CartItem>;
  addItemToCart: (productToAdd: Product) => void;
  removeItemFromCart: (itemtobeRemoved: CartItem) => void;
  clearItemFromCart: (itemToBeCleared: CartItem) => void;
  cartCount: number;
  cartTotal: number;
};

export const CartContext = createContext<Type>({
  isCartOpen: false,
  setIsCartOpen: () => false,
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

type Props = {
  children: ReactNode;
};

export const CartProvider: FC<Props> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<Array<CartItem>>([]);
  const [cartCount, setCartCount] = useState<number>(0);
  const [cartTotal, setCartTotal] = useState<number>(0);

  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    setCartCount(count);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.price,
      0
    );

    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd: Product) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (itemToBeRemoved: CartItem) => {
    setCartItems(removeCartItem(cartItems, itemToBeRemoved));
  };

  const clearItemFromCart = (item: CartItem) => {
    setCartItems(clearCartItem(cartItems, item));
  };

  const value: Type = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};