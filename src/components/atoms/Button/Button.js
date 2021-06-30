import React from "react";
import "./styles.scss";
export const Button = (props) => {
  const { title, onClick } = props;
  return (
    <button onClick={onClick} className="btn">
      {title}
    </button>
  );
};
