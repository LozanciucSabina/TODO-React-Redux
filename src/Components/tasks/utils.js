import { v4 as uuidv4 } from "uuid";

import { database } from "../../firebase";
import { addTask, removeTask, toggleTask } from "../redux/actionCreators";

const userTasks = ({ uid }) =>
  database.collection("users").doc(uid).collection("tasks");

export function addTaskOnServer({ currentUser, task }) {
  return userTasks(currentUser).doc(task.id).set(task);
}

export async function addTodoOnServer({ todo: value, dispatch, currentUser }) {
  const id = uuidv4();

  const task = { value, isChecked: false, id };
  await addTaskOnServer({ currentUser, task });
  dispatch(addTask(task));
}

export async function deleteTodoFromServer({ id, dispatch, currentUser }) {
  await deleteTaskFromServer({ currentUser, id });
  dispatch(removeTask(id));
}

export async function checkTodoOnServer({
  id,
  dispatch,
  currentUser,
  isChecked,
}) {
  await checkTaskOnServer({ currentUser, id, isChecked });
  dispatch(toggleTask(id));
}

export function deleteTaskFromServer({ currentUser, id }) {
  return userTasks(currentUser).doc(id).delete();
}

export function checkTaskOnServer({ currentUser, id, isChecked }) {
  return userTasks(currentUser).doc(id).update({
    isChecked: !isChecked,
  });
}

export function getTasksFromServer(currentUser) {
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
