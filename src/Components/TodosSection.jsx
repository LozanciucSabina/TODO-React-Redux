import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { database } from "../firebase";

import TodoItem from "./TodoItem";
import { AuthContext } from "./Auth";
import { paths } from "./paths";

import useServerTodos from "./hooks/useServerTodos";

import { SHOW_ALL, SHOW_CHECKED, SHOW_ACTIVE } from "./redux/actionTypes";
import Filter from "./Filter";
import { getTodosByVisibility } from "./redux/reducers/visibilityFilter";

import { addTask, deleteTask, toggleTask } from "./redux/actionCreators";

import { REMOVE_TODO } from "./redux/actionTypes";

const TodosSection = () => {
  const { currentUser } = useContext(AuthContext);

  const todos = useSelector(({ todos }) => todos);
  const currentFilter = useSelector(({ visibilityFilter }) => visibilityFilter);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const { logIn } = paths;
  useServerTodos({ currentUser, dispatch });
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (currentUser) {
      todos.forEach((todo) => {
        if (!todo.isChecked) {
          setCounter((prevCounter) => prevCounter + 1);
        }
      });
      return () => setCounter(0);
    }
  }, [currentUser, todos]);

  if (!currentUser) {
    return <Redirect to={logIn} />;
  }
  const addTodo = (e) => {
    e.preventDefault();
    dispatch(addTask({ currentUser, value: todo }));
    setTodo("");
  };

  const deleteTodo = ({ e, id }) => {
    e.preventDefault();
    dispatch(deleteTask({ currentUser, id }));
  };

  const checkTodo = ({ e, id, isChecked }) => {
    e.preventDefault();
    dispatch(toggleTask({ currentUser, id, isChecked }));
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

  function clearCompletedTasks(e) {
    e.preventDefault();
    const batch = database.batch();
    const checkedTodos = todos.filter(({ isChecked }) => isChecked);

    checkedTodos.forEach(({ id }) =>
      dispatch({ type: REMOVE_TODO, payload: { id } })
    );
    checkedTodos.forEach((todo) => {
      const toDelete = database
        .collection("users")
        .doc(currentUser.uid)
        .collection("tasks")
        .doc(todo.id);
      batch.delete(toDelete);
    });
    batch
      .commit()
      .catch((e) => console.log("Something went wrong. Try again."));
  }

  return (
    <div className="todo">
      <form onSubmit={addTodo} className="todo__form">
        <div className="todo__form__radio-button">
          <div className="todo__form__radio-button__overlay"></div>
        </div>
        <input
          className="todo__form__input"
          placeholder="Create a new todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </form>
      <div className="todo__items">{renderTasks()}</div>
      <div
        className={`todo__footer ${
          todos.length === 0 ? "todo__footer--hide" : ""
        }`}
      >
        <p className="todo__footer__counter">{counter} items left</p>
        <div className="todo__footer__filters">
          <Filter children="All" filter={SHOW_ALL} />{" "}
          <Filter children="Active" filter={SHOW_ACTIVE} />{" "}
          <Filter children="Completed" filter={SHOW_CHECKED} />
        </div>
        <button
          className="todo__footer__clear-btn"
          onClick={clearCompletedTasks}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TodosSection;
