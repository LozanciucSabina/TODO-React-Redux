import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, SET_TODOS } from "../actionTypes";

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [action.payload.task, ...state];
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, isChecked: !todo.isChecked };
        }
        return todo;
      });
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    case SET_TODOS:
      return action.payload.todos;
    default:
      return state;
  }
}
