import { createAction } from "../../utils/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const setCategories = (categories: any[]) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEORIES, categories);


