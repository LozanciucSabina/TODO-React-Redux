import React from "react";
import { useDispatch } from "react-redux";

import { SET_VISIBILITY_FILTER } from "./redux/actionTypes";

export default function Filter({ filter, children }) {
  const dispatch = useDispatch();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        dispatch({ type: SET_VISIBILITY_FILTER, payload: filter });
      }}
    >
      {children}
    </button>
  );
}
