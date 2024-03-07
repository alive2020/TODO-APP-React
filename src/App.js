import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoList from "./components/Todos/TodoList";
import TodoForm from "./components/Todos/TodoForm";
import TodosActions from "./components/Todos/TodosActions";

function App() {
  const [todoList, setTodoList] = useState([]);
  const completedTodosCount = todoList.filter(
    (todo) => todo.isCompleted
  ).length;
  console.log("count", completedTodosCount);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodoList([...todoList, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodoList(
      todoList.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };

  const resetTodosHandler = () => {
    setTodoList([]);
  };

  const deletedCompletedTodosHandler = () => {
    setTodoList(todoList.filter((todo) => todo.isCompleted === false));
  };

  return (
    <div className="App">
      <h1> Todo List</h1>
      <div className="todoWrapper">
        <TodoForm addTodo={addTodoHandler} />
        {!!todoList.length && (
          <TodosActions
            completedTodosExist={!!completedTodosCount}
            resetTodos={resetTodosHandler}
            deleteCompletedTodos={deletedCompletedTodosHandler}
          />
        )}
        <TodoList
          todoList={todoList}
          deleteTodo={deleteTodoHandler}
          toggleTodo={toggleTodoHandler}
        />
        {completedTodosCount > 0 && (
          <h3>{`You have completed ${completedTodosCount} ${
            completedTodosCount > 1 ? "todos" : "todo"
          }`}</h3>
        )}
      </div>
    </div>
  );
}

export default App;
