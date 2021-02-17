import {
  SET_VISIBILITY_FILTER,
  SHOW_ALL,
  SHOW_CHECKED,
  SHOW_ACTIVE,
} from "../actionTypes";

export default function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload;
    default:
      return state;
  }
}

export const getTodosByVisibility = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_CHECKED:
      return todos.filter(({ isChecked }) => isChecked);
    case SHOW_ACTIVE:
      return todos.filter(({ isChecked }) => !isChecked);
    default:
      return todos;
  }
};
