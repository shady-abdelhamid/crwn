import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  Reducer,
  SetStateAction,
  useEffect,
  useReducer,
  useState,
} from "react";
import { CartItem } from "../models/cart-item";
import { Product } from "../models/product";
import { createAction } from "../utils/reducer.utils";

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
  setIsCartOpen: (value: boolean) => void;
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

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

type State = {
  isCartOpen: boolean;
  cartItems: Array<CartItem>;
  cartCount: number;
  cartTotal: number;
};

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const cartReducer: Reducer<State, any> = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`unandled type ${type} in cartReducer`);
  }
};

type Props = {
  children: ReactNode;
};

export const CartProvider: FC<Props> = ({ children }) => {
  const [{ cartItems, cartCount, cartTotal, isCartOpen }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems: Array<CartItem>) => {
    const count = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartCount: count,
        cartTotal: newCartTotal,
      })
    );
  };

  const addItemToCart = (productToAdd: Product) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemFromCart = (itemToBeRemoved: CartItem) => {
    const newCartItems = removeCartItem(cartItems, itemToBeRemoved);
    updateCartItemsReducer(newCartItems);
  };

  const clearItemFromCart = (item: CartItem) => {
    const newCartItems = clearCartItem(cartItems, item);
    updateCartItemsReducer(newCartItems);
  };

  const setIsCartOpen = (value: boolean) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, value));
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
