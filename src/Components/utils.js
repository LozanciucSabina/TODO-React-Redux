import app, { database } from "../firebase";
import { v4 as uuidv4 } from "uuid";

export const createUser = ({ email, password }) => {
  app
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then(({ user }) => addUserToDatabase(user))
    .catch((error) => alert(error.message));
};

export const logInUser = ({ email, password }) => {
  app
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .catch((error) => alert(error.message));
};

function addUserToDatabase(user) {
  database.collection("users").doc(user.uid).set({
    email: user.email,
  });
}

export function addTaskToUserDocument({ currentUser, inputValue }) {
  database
    .collection("users")
    .doc(currentUser.uid)
    .collection("tasks")
    .doc(uuidv4())
    .set({
      task: inputValue,
    });
  retrieveTasksFromUserDocument(currentUser);
}

async function retrieveTasksFromUserDocument(currentUser) {
  let tasks = [];
  let i = 0;
  await database
    .collection("users")
    .doc(currentUser.uid)
    .collection("tasks")
    .get()
    .then((querySnap) =>
      querySnap.docs.forEach((doc) => {
        let { task } = doc.data();
        tasks[i++] = task;
      })
    );

  return tasks;
}

export { retrieveTasksFromUserDocument };
