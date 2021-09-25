import React, { FC } from "react";

import styles from "./input.style.module.css";
import { InputProps } from "./Input.types";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ style, handleChange, ...props }, ref) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const { value, name } = e.target;
      handleChange(value, name);
    };
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.keyCode === 8 && !props.value) {
        handleChange("", props.name);
      }
    };
    return (
      <input
        value={props.value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        ref={ref}
        className={styles.input}
        style={style}
        {...props}
      />
    );
  }
);

export default Input;
