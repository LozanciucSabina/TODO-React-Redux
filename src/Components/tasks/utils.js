import { database } from "../../firebase";

const userTasks = ({ uid }) =>
  database.collection("users").doc(uid).collection("tasks");

export function addTaskFirebase({ currentUser, task }) {
  return userTasks(currentUser).doc(task.id).set(task);
}

export function deleteTaskFirebase({ currentUser, id }) {
  return userTasks(currentUser).doc(id).delete();
}

export function toggleTaskFirebase({ currentUser, id, isChecked }) {
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
