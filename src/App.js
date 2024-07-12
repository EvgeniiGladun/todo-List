import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import InputTodo from "./components/InputTodo/InputTodo";
import TaskTodo from "./components/TaskTodo/TaskTodo";

function App() {
  const getLocalStorage = localStorage.getItem("tasks");
  const [toDo, setToDo] = useState("");
  const [tasks, setTasks] = useState(
    getLocalStorage ? JSON.parse(localStorage.getItem("tasks")) : []
  );
  const [currentTasks, setCurrentTasks] = useState([]);
  const [categoriesStatus, setCategoriesStatus] = useState([
    { key: "All", name: "Все" },
    { key: "Active", name: "В работе" },
    { key: "Completed", name: "Выполнены" },
  ]);

  useEffect(() => {
    setCurrentTasks(tasks);
  }, [tasks]);

  // Добавляем задачу
  const addTask = (evt, task) => {
    evt.preventDefault();

    if (task !== null && task !== undefined && toDo !== "") {
      setTasks([task, ...tasks]);
      setToDo("");
      localStorage.setItem("tasks", JSON.stringify([task, ...tasks]));
    }
  };

  // Удаляем задачу
  const deleteTask = (id) => {
    const delTasks = tasks.filter((task) => task.id !== id);
    setTasks(delTasks);
    localStorage.setItem("tasks", JSON.stringify(delTasks));
  };
  // Помечаем задачу как выполненную
  const taskIsDone = (id) => {
    const task = currentTasks.map((task) =>
      task.id === id ? { ...task, isDone: !task.isDone } : { ...task }
    );
    setTasks(task);
    localStorage.setItem("tasks", JSON.stringify(task));
  };

  const chooseCategory = (key) => {
    if (key === "All") {
      setCurrentTasks(tasks);
    } else if (key === "Active") {
      setCurrentTasks(tasks.filter((task) => task.isDone === false));
    } else if (key === "Completed") {
      setCurrentTasks(tasks.filter((task) => task.isDone === true));
    }
  };

  // Редактируем задачу
  const editTask = (task) => {
    const editTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, value: task.value } : { ...t }
    );
    setTasks(editTasks);
    localStorage.setItem("tasks", JSON.stringify(editTasks));
  };

  // Создаем массив задач и рендерим компонент TaskTodo
  const toDoList = currentTasks.map((task) => {
    return (
      <TaskTodo
        key={task.id}
        id_task={task.id}
        task={task.value}
        deleteTask={deleteTask}
        editTask={editTask}
        taskIsDone={taskIsDone}
        isDone={task.isDone}
      />
    );
  });

  return (
    <>
      <Header />
      <InputTodo
        toDo={toDo}
        setToDo={setToDo}
        addTask={addTask}
        taskIsDone={taskIsDone}
      />
      <div className="taskTodo-container">{toDoList}</div>
      {tasks.length === 0 ? null : (
        <Categories
          categoriesStatus={categoriesStatus}
          setCategoriesStatus={setCategoriesStatus}
          chooseCategory={chooseCategory}
        />
      )}
    </>
  );
}

export default App;
