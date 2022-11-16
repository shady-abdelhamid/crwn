import { User } from "firebase/auth";
import {
  createContext,
  FC,
  ReactNode,
  Reducer,
  useEffect,
  useReducer,
} from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducer.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
} as any);

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

type State = {
  currentUser: User | null;
};

const userReducer: Reducer<State, any> = (state, { type, payload }) => {
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };

    default:
      throw new Error(`unandled type ${type} in userReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

type Props = { children: ReactNode };

export const UserProvider: FC<Props> = ({ children }: any) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = (user: User) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: User) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
