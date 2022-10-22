import { createContext, FC, ReactNode, useState } from "react";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
} as any);

type Props = { children: ReactNode };

export const UserProvider: FC<Props> = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
