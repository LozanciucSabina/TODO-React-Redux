import { database } from "../firebase";

const accessTasksCollection = ({ uid }) =>
  database.collection("users").doc(uid).collection("tasks");

export function addTaskToUserCollection({ currentUser, task, id }) {
  return accessTasksCollection(currentUser).doc(id).set(task);
}

export const deleteTaskFromUserCollection = async ({ currentUser, taskID }) => {
  await accessTasksCollection(currentUser)
    .doc(taskID)
    .delete()
    .then(function () {
      console.log("Document successfully deleted!");
    })
    .catch(function (error) {
      console.error("Error removing document: ", error);
    });
};

export async function retrieveTasksFromUserCollection(currentUser) {
  const tasks = [];
  await accessTasksCollection(currentUser)
    .get()
    .then((querySnap) =>
      querySnap.docs.forEach((doc) => {
        let task = {
          id: doc.id,
          value: doc.data().value,
          isChecked: doc.data().isChecked,
        };
        tasks.push(task);
      })
    );
  return tasks;
}
