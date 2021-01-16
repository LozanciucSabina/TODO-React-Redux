import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import { addTaskToUserDocument } from "./utils";
import app from "../firebase";
import { retrieveTasksFromUserDocument } from "./utils";
import TodoItem from "./TodoItem";

const Dashboard = () => {
  const [state, setState] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    retrieveTasksFromUserDocument(currentUser).then((tasks) => {
      setState([...tasks]);
    });
  }, []);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target.children.task.value;
    addTaskToUserDocument({ currentUser, inputValue });
  };
  console.log("state:", state);
  // state.forEach((result) => result.forEach((task) => console.log(task)));
  return (
    <div>
      <h1>Welcome</h1>
      <p>
        This is the dashboard, if you can see this you're logged in. Wanna
        logout?
      </p>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task"></label>
        <input name="task" placeholder="Write a task" />
      </form>
      {state.map((task, index) => (
        <TodoItem data={task} key={index} />
      ))}
    </div>
  );
};

export default Dashboard;
