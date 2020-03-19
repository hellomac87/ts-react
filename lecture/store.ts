import { createStore } from "redux";

import reducers from "./reducers";

const initialState = {
  user: {
    isLoggingIn: false,
    data: null
  },
  posts: []
};

const store = createStore(reducers, initialState);

export default store;
