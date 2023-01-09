import React from "react";

const Info = ({ type, className, name, id, placeholder, required }) => {
  return (
    <>
    <input
      type={type}
      className={className}
      name={name}
      id={id}
      placeholder={placeholder}
      required={required}
    />
    </>
  );
};

export default Info;
