import { createContext, FC, ProviderProps, ReactNode, useState } from "react";

type UserContextType = {
  currentUser: any;
  setCurrentUser: any;
};


export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }: ProviderProps<UserContextType>) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
