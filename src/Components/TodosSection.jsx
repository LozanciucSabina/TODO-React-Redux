import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import TodoItem from "./TodoItem";
import { AuthContext } from "./Auth";
import { paths } from "./paths";

import useServerTodos from "./hooks/useServerTodos";
import {
  addTodoOnServer,
  checkTodoOnServer,
  deleteTodoFromServer,
} from "./tasks/utils";
import { SHOW_ALL, SHOW_CHECKED, SHOW_ACTIVE } from "./redux/actionTypes";
import Filter from "./Filter";
import { getTodosByVisibility } from "./redux/reducers/visibilityFilter";

const TodosSection = () => {
  const { currentUser } = useContext(AuthContext);

  const todos = useSelector((state) => state.todos);
  const currentFilter = useSelector((state) => state.visibilityFilter);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const { logIn } = paths;

  useServerTodos({ currentUser, dispatch });

  if (!currentUser) {
    return <Redirect to={logIn} />;
  }
  const addTodo = (e) => {
    e.preventDefault();
    addTodoOnServer({ currentUser, dispatch, todo });
    setTodo("");
  };

  const deleteTodo = ({ e, id }) => {
    e.preventDefault();
    deleteTodoFromServer({ currentUser, dispatch, id });
  };

  const checkTodo = ({ e, id, isChecked }) => {
    e.preventDefault();
    checkTodoOnServer({ currentUser, dispatch, id, isChecked });
  };

  const renderTasks = () => {
    const filteredTodos = getTodosByVisibility(todos, currentFilter);
    return filteredTodos.map((todo) => (
      <TodoItem
        {...todo}
        key={todo.id}
        deleteTodo={deleteTodo}
        checkTodo={checkTodo}
      />
    ));
  };

  return (
    <div>
      <h1>Your tasks</h1>
      <form onSubmit={addTodo}>
        <input
          placeholder="Write a todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </form>
      {renderTasks()}
      <div>
        <Filter children="All" filter={SHOW_ALL} />{" "}
        <Filter children="Active" filter={SHOW_ACTIVE} />{" "}
        <Filter children="Completed" filter={SHOW_CHECKED} />
      </div>
    </div>
  );
};

export default TodosSection;
