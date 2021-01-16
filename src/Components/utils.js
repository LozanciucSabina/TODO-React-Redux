import { v4 as uuidv4 } from "uuid";

import app, { database } from "../firebase";

export const createUser = ({ email, password }) => {
  app
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .catch((error) => alert(error.message));
};

export const logInUser = ({ email, password }) => {
  app
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .catch((error) => alert(error.message));
};

export function addTaskToUserDocument({ currentUser, task }) {
  return database
    .collection("users")
    .doc(currentUser.uid)
    .collection("tasks")
    .doc(uuidv4())
    .set({
      task,
    });
}

export async function retrieveTasksFromUserDocument(currentUser) {
  const tasks = [];
  await database
    .collection("users")
    .doc(currentUser.uid)
    .collection("tasks")
    .get()
    .then((querySnap) =>
      querySnap.docs.forEach((doc) => {
        let { task } = doc.data();
        tasks.push(task);
      })
    );

  return tasks;
}

export const signOutButton = (
  <button onClick={() => app.auth().signOut()}>Sign out</button>
);
