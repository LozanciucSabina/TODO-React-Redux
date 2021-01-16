import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

import app from "../firebase";
import { AuthContext } from "./Auth";
import { addTaskToUserDocument, retrieveTasksFromUserDocument } from "./utils";
import TodoItem from "./TodoItem";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    retrieveTasksFromUserDocument(currentUser).then((tasks) => {
      setTasks(tasks);
    });
  }, []);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addTaskToUserDocument({ currentUser, task });
    setTasks([task, ...tasks]);
    setTask("");
  };

  return (
    <div>
      <h1>Welcome</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="task"></label>
        <input
          name="task"
          placeholder="Write a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </form>

      {tasks.map((task, index) => (
        <TodoItem data={task} key={index} />
      ))}
    </div>
  );
};

export default Dashboard;
