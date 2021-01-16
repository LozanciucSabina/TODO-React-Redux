import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import AuthenticationForm from "./AuthenticationForm";
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

export const signOutButton = (
  <button onClick={() => app.auth().signOut()}>Sign out</button>
);

export const Message = ({ componentName, submitHandler, path }) => {
  const signUpMessage = "Do you have an account already?";
  const logInMessage = "Don't have an account?";

  const reusablePattern = (message, alternativeLink) => {
    return (
      <>
        <h1>{componentName}</h1>
        <AuthenticationForm submit={submitHandler} />
        <p>
          {message}
          <Link to={path}>{alternativeLink}</Link>
        </p>
      </>
    );
  };

  if (componentName === "Sign Up") {
    return reusablePattern(signUpMessage, "Log In");
  } else if (componentName === "Log In") {
    return reusablePattern(logInMessage, "Sign Up");
  }
};

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
