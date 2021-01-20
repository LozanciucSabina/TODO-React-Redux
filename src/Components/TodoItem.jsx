import React from "react";

const TodoItem = ({ data, taskID, deleteTask }) => {
  return (
    <>
      <div>{data}</div>
      <button onClick={(event) => deleteTask({ taskID, event })}>Delete</button>
      <button>Done</button>
    </>
  );
};

export default TodoItem;
