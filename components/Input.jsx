import React from "react";

const Input = ({ texto, value, type, id, change }) => {
  return (
    <>
      <label htmlFor={id}>{texto}</label>
      <input value={value}  type={type} id={id} onChange={change}/>
    </>
  );
};

export default Input;
