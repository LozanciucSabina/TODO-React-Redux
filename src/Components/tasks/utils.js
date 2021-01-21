import { database } from "../../firebase";

const userTasks = ({ uid }) =>
  database.collection("users").doc(uid).collection("tasks");

export function addTaskOnServer({ currentUser, task, id }) {
  return userTasks(currentUser).doc(id).set(task);
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
