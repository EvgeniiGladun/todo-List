import "./inputTodo.css";

// Форма добавления задачи
function InputTodo(props) {
  return (
    <>
      <form className="inputTodo-form">
        <input
          className="inputTodo-input"
          type="text"
          onChange={(evt) => props.setToDo(evt.target.value)}
          value={props.toDo}
          placeholder="Название задачи..."
        />
        <button
          disabled={props.toDo === "" ? true : false}
          className="inputTodo-button"
          onClick={(evt) =>
            props.addTask(evt, {
              value: props.toDo,
              id: Date.now(),
              isDone: false,
            })
          }
        >
          Добавить задачу
        </button>
      </form>
    </>
  );
}

export default InputTodo;
