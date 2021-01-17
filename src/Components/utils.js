import { useEffect, useState } from "react";
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

const getTasksCollection = ({ uid }) =>
  database.collection("users").doc(uid).collection("tasks");

export function addTaskToUserDocument({ currentUser, task }) {
  return getTasksCollection(currentUser).doc(uuidv4()).set({
    task,
  });
}

export async function retrieveTasksFromUserDocument(currentUser) {
  const tasks = [];
  await getTasksCollection(currentUser)
    .get()
    .then((querySnap) =>
      querySnap.docs.forEach((doc) => {
        let { task } = doc.data();
        tasks.push(task);
      })
    );

  return tasks;
}

export const signOut = () => app.auth().signOut();

export function useTasks(currentUser) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    retrieveTasksFromUserDocument(currentUser).then((tasks) => {
      setTasks(tasks);
    });
  }, [currentUser]);

  const [task, setTask] = useState("");

  const changeTaskValue = (e) => setTask(e.target.value);

  const resetTask = () => {
    setTask("");
  };

  const addTask = async (event) => {
    event.preventDefault();
    await addTaskToUserDocument({ currentUser, task });
    setTasks([task, ...tasks]);
    resetTask();
  };

  return { tasks, task, changeTaskValue, addTask };
}
