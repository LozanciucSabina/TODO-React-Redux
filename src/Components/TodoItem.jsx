const TodoItem = ({
  value,
  id,
  isChecked,
  deleteTodo,
  checkTodo,
  crossIcon,
}) => {
  function toggleOverlay(overlay) {
    let gradient = "";

    if (!overlay) {
      gradient = "todo-item__check-btn--show-gradient";
    }

    return (
      <button
        onClick={(e) => checkTodo({ e, id, isChecked })}
        className={`todo-item__check-btn ${gradient}`}
      >
        {overlay}
        <img alt="" className="todo-item__check-btn__icon" />
      </button>
    );
  }

  function checkButton() {
    const overlay = <div className="todo-item__check-btn__overlay"></div>;
    if (!isChecked) {
      return toggleOverlay(overlay);
    }
    return toggleOverlay();
  }

  function text() {
    let checkedTxt = "";
    if (isChecked) {
      checkedTxt = "todo-item__text--checked";
    }
    return <div className={`todo-item__text ${checkedTxt}`}>{value}</div>;
  }

  return (
    <div className="todo-item">
      {checkButton()}
      {text()}
      <button
        onClick={(e) => deleteTodo({ e, id })}
        className="todo-item__delete-btn"
      >
        <img alt="" className="todo-item__delete-btn__icon" />
      </button>
    </div>
  );
};

export default TodoItem;
