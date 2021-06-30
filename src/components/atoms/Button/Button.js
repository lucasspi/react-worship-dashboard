import React from "react";
import "./styles.scss";
export const Button = (props) => {
  const { title, onClick, outlined } = props;
  return (
    <button onClick={onClick} className={outlined ? "btn-outline" : "btn"}>
      {title}
    </button>
  );
};
