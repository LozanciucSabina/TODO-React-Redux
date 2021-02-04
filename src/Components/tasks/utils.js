import { v4 as uuidv4 } from "uuid";

import { database } from "../../firebase";
import { addTask, removeTask, toggleTask } from "../redux/actionCreators";

const userTasks = ({ uid }) =>
  database.collection("users").doc(uid).collection("tasks");

export function addTaskOnFirebase({ currentUser, task }) {
  return userTasks(currentUser).doc(task.id).set(task);
}

export function deleteTaskFirebase({ currentUser, id }) {
  return userTasks(currentUser).doc(id).delete();
}

export function checkTaskFirebase({ currentUser, id, isChecked }) {
  return userTasks(currentUser).doc(id).update({
    isChecked: !isChecked,
  });
}

export function getTasksFirebase(currentUser) {
  return userTasks(currentUser)
    .get()
    .then(({ docs }) =>
      docs.map((doc) => {
        const { id } = doc;
        const { value, isChecked } = doc.data();

        return { id, value, isChecked };
      })
    );
}

export function addTodoOnServer({ todo: value, currentUser }) {
  return async function (dispatch) {
    const id = uuidv4();

    const task = { value, isChecked: false, id };
    await addTaskOnFirebase({ currentUser, task });
    dispatch(addTask(task));
  };
}

export function deleteTodoFromServer({ id, currentUser }) {
  return async function (dispatch) {
    await deleteTaskFirebase({ currentUser, id });
    dispatch(removeTask(id));
  };
}

export function checkTodoOnServer({ id, currentUser, isChecked }) {
  return async function (dispatch) {
    await checkTaskFirebase({ currentUser, id, isChecked });
    dispatch(toggleTask(id));
  };
}
