import React, { useState } from "react";
import styles from "./TodoForm.module.css";
import Button from "../UI/Button";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (text !== "") {
      addTodo(text);
    } else {
      alert("Enter new Todo!");
    }
    setText("");
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <input
          type="text"
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default TodoForm;
