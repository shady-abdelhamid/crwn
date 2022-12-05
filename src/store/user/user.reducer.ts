import { User } from "firebase/auth";
import { Reducer } from "redux";

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

export type UserState = {
  currentUser: User | null;
};

export const userReducer: Reducer = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };

    default:
      return state;
  }
};

const INITIAL_STATE = {
  currentUser: null,
};
