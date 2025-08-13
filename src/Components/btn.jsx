import React from "react";

export const Button = ({label, onSubmit}) => {
  return (
    <button onClick={onSubmit}>
        {label}
    </button>
  );
};

