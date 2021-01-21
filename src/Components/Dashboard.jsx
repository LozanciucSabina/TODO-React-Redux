import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import TodoItem from "./TodoItem";
import { AuthContext } from "./Auth";
import { useTasks } from "./custom hooks/useTasks";
import { paths } from "./paths";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const {
    tasks,
    task,
    changeTaskValue,
    addTask,
    deleteTask,
    checkTask,
  } = useTasks(currentUser);
  const { logIn } = paths;

  if (!currentUser) {
    return <Redirect to={logIn} />;
  }

  const renderTasks = () =>
    tasks.map((task) => (
      <TodoItem
        {...task}
        key={task.id}
        deleteTask={deleteTask}
        checkTask={checkTask}
      />
    ));

  return (
    <div>
      <h1>Welcome</h1>
      <form onSubmit={addTask}>
        <input
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
