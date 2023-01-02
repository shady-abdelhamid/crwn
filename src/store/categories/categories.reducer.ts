import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const CATEGORIES_INITIAL_STATE = {
    categories: [] as any[],
  };
  
  export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, { type, payload }: any) => {
    switch (type) {
      case CATEGORIES_ACTION_TYPES.SET_CATEORIES:
        return { ...state, categories: payload };
  
      default:
        return state;
    }
  };
  