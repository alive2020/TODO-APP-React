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
        <h2>Todo List is Empty</h2>
      )}
    </div>
  );
}

export default TodoList;
