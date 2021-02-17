import { v4 as uuidv4 } from "uuid";

import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, SET_TODOS } from "./actionTypes";

import {
  addTaskFirebase,
  deleteTaskFirebase,
  toggleTaskFirebase,
  getTasksFirebase,
} from "../tasks/utils";

export function addTask({ value, currentUser }) {
  return (dispatch) => {
    const id = uuidv4();
    const task = { value, isChecked: false, id };
    addTaskFirebase({ currentUser, task }).then(() =>
      dispatch({ type: ADD_TODO, payload: { task } })
    );
  };
}

export function deleteTask({ id, currentUser }) {
  return (dispatch) => {
    deleteTaskFirebase({ id, currentUser }).then(() =>
      dispatch({ type: REMOVE_TODO, payload: { id } })
    );
  };
}
export function toggleTask({ id, currentUser, isChecked }) {
  return (dispatch) => {
    toggleTaskFirebase({ currentUser, id, isChecked }).then(() =>
      dispatch({ type: TOGGLE_TODO, payload: { id } })
    );
  };
}

export function setTasks(currentUser) {
  return (dispatch) => {
    getTasksFirebase(currentUser).then((todos) => {
      return dispatch({ type: SET_TODOS, payload: { todos } });
    });
  };
}
