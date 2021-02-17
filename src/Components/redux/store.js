import { createStore, combineReducers, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import todos from "./reducers/todos";
import visibilityFilter from "./reducers/visibilityFilter";

const allReducers = combineReducers({
  todos,
  visibilityFilter,
});

const composedMiddleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware)
);

const store = createStore(allReducers, composedMiddleware);

export default store;
