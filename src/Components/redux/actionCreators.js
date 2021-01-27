import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  SET_TODOS,
  SET_VISIBILITY_FILTER,
} from "./actionTypes";

export function addTask(task) {
  return { type: ADD_TODO, payload: { task } };
}

export function toggleTask(id) {
  return { type: TOGGLE_TODO, payload: { id } };
}

export function removeTask(id) {
  return { type: REMOVE_TODO, payload: { id } };
}

export function setTasks(todos) {
  return { type: SET_TODOS, payload: { todos } };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, payload: filter };
}
