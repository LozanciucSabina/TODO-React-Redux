import { createStore, combineReducers } from "redux";

import todos from "./reducers/todos";
import visibilityFilter from "./reducers/visibilityFilter";

const allReducers = combineReducers({
  todos,
  visibilityFilter,
});

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => console.log("Subscription data:", store.getState()));

export default store;
