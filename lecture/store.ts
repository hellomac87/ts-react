import {
  createStore,
  MiddlewareAPI,
  Dispatch,
  AnyAction,
  compose,
  applyMiddleware
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

const initialState = {
  user: {
    isLoggingIn: false,
    data: null
  },
  posts: []
};

const firstMiddleware = (store: MiddlewareAPI) => (
  next: Dispatch<AnyAction>
) => (action: AnyAction) => {
  console.log("로깅", action);
  next(action);
};

const thunkMiddleware = (store: MiddlewareAPI) => (
  next: Dispatch<AnyAction>
) => (action: any) => {
  if (typeof action === "function") {
    //비동기
    return action(store.dispatch, store.getState);
  }
  return next(action); //동기
};

const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(firstMiddleware))
    : composeWithDevTools(applyMiddleware(firstMiddleware, thunkMiddleware));

const store = createStore(reducers, initialState, enhancer);

export default store;
