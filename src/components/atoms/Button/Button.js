import React from "react";
import "./styles.scss";
export const Button = (props) => {
  const { title, onClick, type = "" } = props;
  return (
    <button
      onClick={onClick}
      className={
        type === "outlined"
          ? "btn-outline"
          : type === "unfilled"
          ? "btn-unfilled"
          : type === "unfilled-error"
          ? "btn-unfilled-error"
          : "btn"
      }
    >
      {title}
    </button>
  );
};
