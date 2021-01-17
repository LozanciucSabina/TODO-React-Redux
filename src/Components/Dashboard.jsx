import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import TodoItem from "./TodoItem";
import { AuthContext } from "./Auth";
import { useTasks } from "./utils";
import { paths } from "./paths";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const { tasks, task, changeTaskValue, addTask } = useTasks(currentUser);
  const { login } = paths;

  if (!currentUser) {
    return <Redirect to={login} />;
  }

  const renderTasks = () =>
    tasks.map((task, index) => <TodoItem data={task} key={index} />);

  return (
    <div>
      <h1>Welcome</h1>
      <form onSubmit={addTask}>
        <label htmlFor="task"></label>
        <input
          name="task"
          placeholder="Write a task"
          value={task}
          onChange={changeTaskValue}
        />
      </form>
      {renderTasks()}
    </div>
  );
};

export default Dashboard;
