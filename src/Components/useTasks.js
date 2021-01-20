import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  addTaskToUserCollection,
  retrieveTasksFromUserCollection,
  deleteTaskFromUserCollection,
} from "./tasksUtils";

export function useTasks(currentUser) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    retrieveTasksFromUserCollection(currentUser).then((tasks) => {
      setTasks(tasks);
    });
  }, [currentUser]);

  const [taskValue, setTaskValue] = useState("");

  const changeTaskValue = (e) => {
    setTaskValue(e.target.value);
  };

  const addTask = async (event) => {
    event.preventDefault();
    const id = uuidv4();
    const task = { value: taskValue, isChecked: false, id };
    await addTaskToUserCollection({ currentUser, task, id });
    setTasks((prevTasks) => [task, ...prevTasks]);
    setTaskValue("");
  };

  const deleteTask = async ({ taskID, event }) => {
    event.preventDefault();

    await deleteTaskFromUserCollection({ taskID, currentUser });
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskID));
  };

  return { tasks, task: taskValue, changeTaskValue, addTask, deleteTask };
}
