import "./TaskTodo.css";

// Карточка задачи
function TaskTodo(props) {
  return (
    <div className="taskTodo">
      <div className="task">
        <h2 className="task-title">{props.task}</h2>
      </div>
      <div className="checkbox">
        <label className="checkbox-label" htmlFor={`checkbox-${props.id_task}`}>
          Статуc задачи
        </label>
        <input
          className="checkbox-input"
          id={`checkbox-${props.id_task}`}
          type="checkbox"
          defaultChecked={props.isDone}
          onClick={() => props.taskIsDone(props.id_task)}
        />
      </div>
      <div className="task-buttons">
        <button
          className="task-button"
          onClick={() => props.deleteTask(props.id_task)}
        >
          Удалить
        </button>
        <button
          className="task-button"
          onClick={(evt) => props.handlePopup(props.id_task)}
        >
          Изменить
        </button>
      </div>
    </div>
  );
}

export default TaskTodo;
