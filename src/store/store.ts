import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

export type RootState = ReturnType<typeof rootReducer>;

// middlewares
const middlewares = [logger]

const composedEnhancers = compose(applyMiddleware(...middlewares));

// root reducer
export const store = createStore(rootReducer, undefined, composedEnhancers);