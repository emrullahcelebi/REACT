import React from "react";

const TestimonialText = ({ text, name }) => {
  return (
    <>
      <p>{text}</p>
      <span className="author">- {name} -</span>
    </>
  );
};

export default TestimonialText;
