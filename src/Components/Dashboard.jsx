import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import TodoItem from "./TodoItem";
import { AuthContext } from "./Auth";
import { useTasks } from "./useTasks";
import { paths } from "./paths";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const { tasks, task, changeTaskValue, addTask, deleteTask } = useTasks(
    currentUser
  );
  const { logIn } = paths;

  if (!currentUser) {
    return <Redirect to={logIn} />;
  }

  const renderTasks = () =>
    tasks.map((taskObject) => (
      <TodoItem
        key={taskObject.id}
        data={taskObject.value}
        taskID={taskObject.id}
        deleteTask={deleteTask}
      />
    ));

  return (
    <div>
      <h1>Welcome</h1>
      <form onSubmit={addTask}>
        <label htmlFor="task"></label>
        <input
          name="value"
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
