import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { SET_VISIBILITY_FILTER } from "./redux/actionTypes";

export default function Filter({ filter, children }) {
  const dispatch = useDispatch();
  const currentFilter = useSelector(({ visibilityFilter }) => visibilityFilter);
  const isCurrentFilter = currentFilter === filter;

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        dispatch({ type: SET_VISIBILITY_FILTER, payload: filter });
      }}
      className={`filter ${
        isCurrentFilter ? "filter--active" : "filter--inactive"
      }`}
    >
      {children}
    </button>
  );
}
