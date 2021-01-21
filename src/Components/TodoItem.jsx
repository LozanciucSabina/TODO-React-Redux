import React from "react";

const TodoItem = ({ value, id, isChecked, deleteTask, checkTask }) => {
  return (
    <>
      <div>{value}</div>
      <button onClick={(event) => deleteTask({ id, event })}>Delete</button>
      <button onClick={(event) => checkTask({ id, event, isChecked })}>
        Done
      </button>
    </>
  );
};

export default TodoItem;
