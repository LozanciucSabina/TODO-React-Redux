import React from "react";

const TodoItem = ({ value, id, isChecked, deleteTodo, checkTodo }) => {
  return (
    <>
      <div>{value}</div>
      <button onClick={(e) => deleteTodo({ e, id })}>Delete</button>
      <button onClick={(e) => checkTodo({ e, id, isChecked })}>Done</button>
    </>
  );
};

export default TodoItem;
