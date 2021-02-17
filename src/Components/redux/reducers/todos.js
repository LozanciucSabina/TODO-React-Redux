import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, SET_TODOS } from "../actionTypes";

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [action.payload.task, ...state];
    case TOGGLE_TODO:
      return state.map((todo) => {
        const { id, isChecked } = todo;
        if (id === action.payload.id) {
          return { ...todo, isChecked: !isChecked };
        }
        return todo;
      });
    case REMOVE_TODO:
      return state.filter(({ id }) => id !== action.payload.id);
    case SET_TODOS:
      return action.payload.todos;
    default:
      return state;
  }
}
