import { FaRegFaceSadCry } from "react-icons/fa6";

import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList({ todoList, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {todoList.length ? (
        todoList.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))
      ) : (
        <div className={styles.todoListEmptyContainer}>
          <FaRegFaceSadCry size={50} />
          <p>Todo List is Empty</p>
        </div>
      )}
    </div>
  );
}

export default TodoList;
