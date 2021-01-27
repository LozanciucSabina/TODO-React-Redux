import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  addTaskOnServer,
  checkTaskOnServer,
  deleteTaskFromServer,
  getTasksFromServer,
} from "../tasks/utils";

export function useTasks(currentUser) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (currentUser) {
      getTasksFromServer(currentUser).then((tasks) => {
        setTasks(tasks);
      });
    }
  }, [currentUser]);

  const [taskValue, setTaskValue] = useState("");

  const changeTaskValue = (e) => {
    setTaskValue(e.target.value);
  };

  const addTask = async (event) => {
    event.preventDefault();
    const id = uuidv4();
    const task = { value: taskValue, isChecked: false, id };
    await addTaskOnServer({ currentUser, task, id });
    setTasks((prevTasks) => [task, ...prevTasks]);
    setTaskValue("");
  };

  const deleteTask = async ({ id, event }) => {
    event.preventDefault();

    await deleteTaskFromServer({ id, currentUser });
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const checkTask = async ({ id, event, isChecked }) => {
    event.preventDefault();

    await checkTaskOnServer({
      id,
      isChecked,
      currentUser,
    });
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  };

  return {
    tasks,
    task: taskValue,
    changeTaskValue,
    addTask,
    deleteTask,
    checkTask,
  };
}
