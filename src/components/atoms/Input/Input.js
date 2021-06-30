import React from "react";
import "./styles.scss";
// import { Container } from './styles';

export const Input = (props) => {
  const { title, value, onChange } = props;
  return (
    <div className="input-container">
      <p className="input-title">{title}</p>
      <input
        className="input-style"
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};
