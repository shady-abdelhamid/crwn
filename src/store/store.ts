import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

export type RootState = ReturnType<typeof rootReducer>;

// middlewares
const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
    if (!action.type) {
        return next(action);
    }
    console.log('type: ', action.type);
    console.log('payload: ', action.payload);
    console.log('currentState: ', action.getState());

    next(action);

    console.log('next state: ', store.getState());
    


};

const middlewares = [loggerMiddleware]

const composedEnhancers = compose(applyMiddleware(...middlewares));

// root reducer
export const store = createStore(rootReducer, undefined, composedEnhancers);