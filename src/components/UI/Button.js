import React from "react";
import styles from "./Button.module.css";

const Button = ({ onClick, children, title, disabled = false }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      <span className={styles.tooltip}>{title}</span>
      {children}
    </button>
  );
};

export default Button;
