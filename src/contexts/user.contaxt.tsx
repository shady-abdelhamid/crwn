import { createContext, FC, ProviderProps, ReactNode, useState } from "react";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
} as any);

export const UserProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
