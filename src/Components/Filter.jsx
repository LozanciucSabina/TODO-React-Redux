import React from "react";
import store from "./redux/store";

import { SET_VISIBILITY_FILTER } from "./redux/actionTypes";

export default function Filter({ filter, children }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        store.dispatch({ type: SET_VISIBILITY_FILTER, payload: filter });
      }}
    >
      {children}
    </button>
  );
}
